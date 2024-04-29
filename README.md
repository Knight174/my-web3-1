# my-web3-1

## remix

智能合约在线 IDE：https://remix.ethereum.org/

## 以太坊 Ethereum

一个去中心化的开源区块链 blockchain，允许用户通过创建智能合约 creating smart contracts 与网络进行交互。它的原生加密货币是以太币。就市值而言，以太币是仅次于比特币的第二大最有价值的加密货币。它由 Vitalik Buterin 于 2013 年创建。

## 智能合约 Smart Contracts

它们是存储在区块链上的计算机程序 computer programs ，在满足预定条件时运行。智能合约是用 Solidity 语言编写的。

在 Web3 中，信息和资产的流转，合约编写要注重：

- 安全性
- 简洁和效率（更少的计算单元）

如果有标准，使用已经成熟的标准。

## 去中心化 Decentralized

数据状态不由中央实体 central entity、平台 platform 或个人 individual 收集。

## Solidity

一种用于编写智能合约 writing smart contracts 的面向对象 object-oriented 的编程语言。它用于在各种区块链平台上实施智能合约，最著名的是以太坊。

## 区块链

区块链网络是一种点对点连接，其中信息在多个设备之间共享，几乎不可能被黑客入侵。它是一种记录信息的系统，其方式使得很难或不可能更改保存在网络上的信息。

## 区块链预言机

“预言机”是一个来自区块链和加密货币领域的术语，指的是一种系统或服务，通过在区块链上执行智能合约来提供外部数据。这些数据可以是现实世界中的任何信息，比如股票价格、天气情况或者体育比赛结果等。预言机的作用是将这些外部数据引入到区块链网络中，使智能合约可以基于这些数据做出自动化的决策或触发特定的事件。

区块链预言机标准：Chainlink 扩展了智能合约的能力，给链下的数据和计算提供了安全的链上入口。

## Dapp

代表去中心化应用程序 Decentralized App 。它们是在去中心化网络或区块链上运行其后端代码（主要用 Solidity 编写的智能合约）的应用程序。可以使用 react、vue 或 Angular 等前端框架构建 Dapps。

## OpenZeppelin Contracts

https://www.openzeppelin.com/contracts

**OpenZeppelin Contracts 是其的一个开放式库，专门用于智能合约的开发。** 通过这个库，开发者可以构建和测试安全的智能合约。具体包括支持 ERC20，ERC777，ERC721 和 ERC1155 的标准合约，此外它还提供许多模块让用户自定义以满足特定需求。

## MetaMask

MetaMask 钱包：可以建立多个账户，与区块链进行转账、授权等交易操作。

### 账户类型

以太坊中有两种账户类型：

- EOA（Externally Owned Accounts，外部拥有账户）。人类控制的账户，用私钥签名交易，发送 ETH，调用智能合约等。`msg.sender`
- 合约账户。由智能合约控制的账户，由智能合约的代码定义并控制其行为。

一个钱包可以有多个账户，每个账户都有一个 hash 地址和一个私钥，可以用于主网或测试网的交易。

### 公钥作用

钱包账户地址（本质上是一个以太坊地址）被创建是通过对公钥取 Hash 来实现的：

```
private_key = random_bytes(32)
public_key = private_key_to_public_key(private_key)
address = sha3(public_key)[-20:]
```

### 私钥作用

私钥用于进行签名交易，以证明这份声明来自该地址的拥有者。私钥应当保持绝对的安全和私密，一旦丢失或者被盗，那么与之相关的以太坊就有可能被盗取。

数字签名的作用：

- 身份认证：证明签名方是私钥的持有人。
- 不可否认：发送方不能否认发送过这个消息。
- 完整性：通过验证针对传输消息生成的数字签名，可以验证消息是否在传输过程中被篡改。

### 助记词

助记词是由一组通常为 12 个或 24 个单词组成的列表，它是钱包私钥的人类可读的形式。助记词是由私钥生成的，因此它可以用来恢复或备份钱包。（这是最重要的密码，不可丢失）

## 测试网

Sepolia Testnet Explorer（输入账户地址，查看交易详情）：https://sepolia.etherscan.io/

测试水龙头（免费获取测试网 ETH）：https://faucets.chain.link/

EVM networks list：https://chainlist.org/

## Gas

gas limit x gas price = gas fee

运算单元需要运行多少次 x 每次运算需要花多少钱 = 总费用

气费，在交易时需要支付的费用。该费用使用以太币（ETH）来支付，SepoliaETH 是一种仿真 ETH 币，在测试网中作为 ETH 去付费。

而个人铸造的代币的本质是合约内部的一种状态记账方式，代表了钱包地址对某种资产的所有权，它并不能被以太坊节点直接接受用以支付交易费用。

## 单位换算

铸币时的单位为 wei。

- ether: 1 Ether = 10^18 wei
- finney: 1 Finney = 10^15 wei
- szabo: 1 Szabo = 10^12 wei
- gwei: 1 Gwei = 10^9 wei
- mwei 或 babbage: 1 Mwei = 10^6 wei
- kwei 或 lovelace: 1 Kwei = 10^3 wei
- wei: 最小单位，Wei 是 Ethereum 的最小单位。

## 服务商节点

服务商节点是连接区块链和用户（浏览器、脚本、后端）的桥梁，从而实现链上链下的交互。

- Infura: infura.io
- Alchemy: alchemy.com

## WETH

https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

WETH 的全称是 Wrapped Ether，它是以太坊（ETH）的包装代币。简单来说，WETH 将原生的以太坊币（ETH）转变为了遵循 ERC-20 标准的代币。

## DAI

https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f

DAI 是一种稳定币，其价值与美元挂钩，1 DAI 等于 1 美元。稳定币的主要用途是提供加密市场的稳定性，因为它们保持恒定的价值，不会像其他加密货币那样波动。

## ABI

ABI，全称是 Application Binary Interface，中文翻译为应用程序二进制接口。在以太坊开发中，ABI 是用来在智能合约和外部程序之间进行交互的接口。
ABI 包含两个主要部分：
函数声明：包含函数的名称、输入参数类型、输出参数类型。
事件声明：包含事件的名称和参数。

```json
[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    ...
]
```

在这个示例中，name 函数将返回一个类型为 string 的值，它不需要输入参数，同时它不接受以太币支付 (payable 为 false)。

## NFT（铭文）

全球最大 NFT 交易所：https://opensea.io/

测试网版本：https://testnets.opensea.io/

相关标准：ERC721 / ERC1155

在 Web3 或者区块链技术中，常听到的"铭文"一词，它通常的英文名是"NFT"，全称为"Non-Fungible Token"，翻译过来就是"非同质化代币"。

非同质化代币跟之前常见的比特币或者以太币等是有区别的。像比特币、以太币这类代币是完全同质的，就像我们手中的货币一样，我有一元，你也有一元，这两个一元是完全等价的。

然而，非同质化代币的情况就不同了。每一个 NFT 都是独一无二的，拥有它的特殊属性和元数据。它的这种特性使其成为数字世界中的独一无二的艺术品，或者说是"铭文"。

NFT 广泛应用于数字艺术品的购买、拥有和转售。也常被用于游戏资产、收藏品、虚拟土地注册等业务。拥有一个 NFT，就等同于拥有了一件独一无二的艺术品的所有权。

## NFT 元数据（metadata）

NFT 中可以存储 image、gif、mp4...由于存储在链上比较昂贵，一般存在链下，从 URL 中获取数据。

- 中心化服务器存储：mysql 等
- 去中心化存储服务中
  - IPFS
  - Pinata
  - Infura
  - Quicknode
  - NFT.storage
  - Web3.storage
  - Thirdweb storage

Metadata JSON 示例:

```json
{
  "name": "NFT 名称",
  "description": "NFT 描述",
  "image": "你的NFT图片的url链接, https://...",
  "attributes": [
    {
      "trait_type": "属性1",
      "value": "值1"
    },
    {
      "trait_type": "属性2",
      "value": "值2"
    }
    //......
  ]
}
```

name，description 和 image 是常见的元数据字段，它们分别代表了这个 NFT 的名称，描述和图像。同时，attributes 提供了一种方式来添加更加详细的数据，比如颜色，稀有度等等。

## ENS

https://app.ens.domains/

ENS 与钱包地址的映射。

ENS，全称 Ethereum Name Service（以太坊名称服务），是建立在以太坊区块链上的一个开放和可扩展的命名系统。

在以太坊网络中，一个标准的以太坊地址是一个 42 位的字符串，类似于"0x89742F2c2d289f3DFdF88ad7B4127373D3b2F73a "，这对于人类来说很难记住和操作。ENS 的出现就是为了解决这个问题：通过将复杂的以太坊地址映射到人类可读的名字，例如"myname.eth"，从而使得用户更容易记住和操作自己的以太坊地址。

简单来说，ENS 就像是以太坊的 DNS（Domain Name System，域名系统），只不过 DNS 用于将网站的 IP 地址映射为人类容易理解的网站名（例如将 IP 地址映射为"www.google.com"），而ENS则是将以太坊地址映射为人类容易理解的名字。

用户可以通过 ENS 寄存器自己的“.eth”域名，并将其指向自己的以太坊地址。当其他人向"myname.eth"发送以太币或 ERC20 代币时，这些资产将直接转入与"myname.eth"关联的以太坊地址。

此外，ENS 还支持在以太坊区块链上存储任何其他类型的数据，例如 IPFS 哈希、Tor.onion 地址等。

## 防女巫

"防女巫"或者"防女巫攻击"，其英文是 "Sybil resistance" 或者 "Sybil attack"，是区块链和网络安全领域一个常见的术语。

女巫攻击是指一个网络中的恶意节点，冒充多个伪造节点，以此来获得在网络中的主导地位，进而对网络进行攻击。它的名字来源于一本名为"Sybil"的书，书中的角色患有多重人格障碍。
在区块链技术中，借助于混合共识机制，如工作量证明（PoW）和权益证明（PoS），可以有效地防止女巫攻击，因为这些机制需要提供一些物理资源或者资产，如计算能力，存储空间或者代币，才能参与到网络的决策中去，这就有效地防止了一个恶意节点通过大量制造伪造节点来控制网络。

这种机制被称为 "防女巫"。当我们谈论一个网络或者协议具有防女巫特性，就意味着这个网络或者协议能够抵抗单个恶意节点通过制造大量伪造身份来攻击网络的能力。

## Chainlink VRF（Verifiable Random Function）

Chainlink VRF（Verifiable Random Function）是一个提供可验证随机数的服务，它是 Chainlink 网络的一部分。

在区块链上创建一个可靠的随机数是非常困难的，因为区块链网络本身是去中心化和公开的。任何人都可以查看区块链上的所有交易，因此如果一些重要的操作（例如抽奖或者游戏）依赖于这个随机数，那么就有可能被他人预测或者操纵。

Chainlink VRF 采用了一种特殊的方法来生成随机数。每次请求随机数时，Chainlink VRF 会生成两个重要的数据：一个是随机数结果，另一个是一个对应的证明。其他人可以通过这个证明来验证这个随机数是真实随机且无法被操纵的。这大大增加了在区块链上使用随机数的安全性。

Chainlink VRF 广泛应用于区块链的各个领域，例如 **DeFi、游戏、NFT** 等。

VRF 中的 3 个函数：

1. 密钥生成函数

   `G(r) => (PK, SK)`

   - PK 公钥
   - SK 私钥

2. 随机数生成函数

   `E(SK, seed) => (Randomness, Proof)`

   - seend 生成随机数的种子
   - Randomness VRF 返回的随机数
   - Proof 证明随机数的合法性

3. 验证函数

   `V(PK, seed, Randomness, Proof) => (true or false)`

## Chainlink VRF Architecture

1. 用户发送随机数请求
2. 用户合约调用 coordinator 合约中的函数发送随机数请求，以申请随机数。
3. preseed 值被写入 event log
4. 预言机节点从 event log 中读取 preseed 和区块哈希的值。
5. 预言机节点通过 VRF 算法生成随机数和证明。
6. 预言机将随机数和证明发送给 coordinator 合约。
7. coordinator 合约对证据进行验证后，将随机数写入用户合约。

## VRF 应用

1. community identity 社区认证 无聊猿
2. gamefi nft
3. proof of attendance
4. asset collateralized proof 资产质押证明
5. membership 会员卡

## IPFS（Interplanetary File System）

web3 世界的存储系统。https://docs.ipfs.tech/

是一种分布式的点对点文件共享系统，与常见的互联网方案（HTTP）不同。IPFS 是一种用于地址寻址，路由、传输数据的模块化协议，从底层设计原则上就考虑了内容寻址等特点。

## ERC20

ERC20 是一种在以太坊网络上定义的代币标准。它定义了代币的传输方法，并允许代币以一种统一的方式在区块链上进行交互。由于其广泛的可兼容性，现在在世界范围内的许多代币都使用此标准。

具体来说，ERC20 定义了一些主要函数设置，包括：

- totalSupply(): 返回代币的总供应量。
  balanceOf(address account): 返回某个地址(账户)当前拥有的代币数额。
- transfer(address recipient, uint256 amount): 把某个数量的代币从整个交易的发起者转移到某个账户。
  approve(address spender, uint256 amount): 允许 spender 从交易发起方账户中取出数量为 amount 的代币。
- allowance(address owner, address spender): 返回 spender 还剩余可提取的代币的数量。
- transferFrom(address sender, address recipient, uint256 amount): 允许一个账户（对应之前的 spender）转移数量为 amount 的代币到另一个账户。
  此外，ERC20 标准还需实现两个事件:
- Transfer: 在任何代币数量的转账成功时都必须要触发。
- Approval: 在调用 approve 函数以允许值为\_value 的代币从\_owner 账户转移到\_spender 账户时触发。

ERC20 代币可以应用在各种业务场景中，如代表投票权的权益代币，或是代表公司股权的证券代币等。

## ERC721

ERC721 是一种在以太坊上的非同质化代币(non-fungible token，简称 NFT)的标准。每个 ERC721 代币都是唯一的，可以被认为是一种在区块链上的收藏品。与 ERC20 代币不同，这些代币不能直接交换，因为每一个都有独特的值和信息。

以下是 ERC721 代币必须实现的一些关键函数：

- balanceOf(address \_owner)： 获取给定地址的代币数量。
- ownerOf(uint256 \_tokenId)： 显示给定代币的所有者。
- transferFrom(address \_from, address \_to, uint256 \_tokenId) ：从一个地址向另一个地址转移代币。
- approve(address \_approved, uint256 \_tokenId): 授权第三方转移特定的代币。
- getApproved(uint256 \_tokenId): 获取特定代币当前授权的地址。

ERC721 标准还包含了两个主要的事件：

- Transfer(address from, address to, uint256 tokenId): 表示所有权的转移，当代币被创建、转移或销毁时都必须触发此事件。
- Approval(address owner, address approved, uint256 tokenId): 表示某个账户被授权管理 tokenId（代币 ID），每次授权变动都必须触发此事件。

ERC721 代币广泛应用于包括艺术品、域名、虚拟房地产和虚拟商品在内的数字所有权的表示和交易中，最知名的例子就是 CryptoKitties，这是一款允许玩家购买、收集、繁殖和出售虚拟猫的游戏。
