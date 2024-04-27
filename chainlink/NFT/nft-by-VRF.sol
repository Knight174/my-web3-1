// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/vrf/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";

contract MyDogs is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Ownable,
    VRFConsumerBaseV2
{
    uint256 private _nextTokenId;

    // attrs for VRF
    uint64 s_subscriptionId; // 订阅id
    address s_owner;
    VRFCoordinatorV2Interface COORDINATOR; // 预言机合约 COORDINATOR
    address vrfCoordinator = 0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625;
    bytes32 s_keyHash =
        0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c;
    uint32 callbackGasLimit = 2500000; // 允许预言机最多用多少 gas
    uint16 requestConfirmations = 3; // 至少有三个交易认为随机数可写入
    uint32 numWords = 1; // 申请随机数的个数

    mapping(uint256 => uint256) public requestId2TokenId; // requestId => tokenId

    // metadata for nfts
    string constant META_DATA_1 =
        "ipfs://QmXw7TEAJWKjKifvLE25Z9yjvowWk2NWY3WgnZPUto9XoA";
    string constant META_DATA_2 =
        "ipfs://QmTFXZBmmnSANGRGhRVoahTTVPJyGaWum8D3YicJQmG97m";
    string constant META_DATA_3 =
        "ipfs://QmSM5h4WseQWATNhFWeCbqCTAGJCZc11Sa1P5gaXk38ybT";

    // subscriptionId 在 https://vrf.chain.link/ 中生成

    constructor(
        address initialOwner,
        uint64 subscriptionId
    )
        ERC721("MyDogs", "MDS")
        Ownable(initialOwner)
        VRFConsumerBaseV2(vrfCoordinator)
    {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_subscriptionId = subscriptionId;
    }

    function safeMint() public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);

        // 随机数发送
        uint256 requestId = COORDINATOR.requestRandomWords(
            s_keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        requestId2TokenId[requestId] = tokenId;
        // _setTokenURI(tokenId, uri);
    }

    // fulfillRandomWords function
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        uint256 randomNumber = randomWords[0]; // 拿到随机数，这里就生成了一个
        uint256 tokenId = requestId2TokenId[requestId]; // 拿 tokenId

        if (randomNumber % 3 == 0) {
            _setTokenURI(tokenId, META_DATA_1);
        } else if (randomNumber % 3 == 1) {
            _setTokenURI(tokenId, META_DATA_2);
        } else {
            _setTokenURI(tokenId, META_DATA_3);
        }
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
