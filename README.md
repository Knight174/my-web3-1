# my-web3-1

一些合约作业

## remix

智能合约在线 IDE：https://remix.ethereum.org/

## 区块链预言机

“预言机”是一个来自区块链和加密货币领域的术语，指的是一种系统或服务，通过在区块链上执行智能合约来提供外部数据。这些数据可以是现实世界中的任何信息，比如股票价格、天气情况或者体育比赛结果等。预言机的作用是将这些外部数据引入到区块链网络中，使智能合约可以基于这些数据做出自动化的决策或触发特定的事件。

区块链预言机标准：Chainlink 扩展了智能合约的能力，给链下的数据和计算提供了安全的链上入口。

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

### 助记词

助记词是由一组通常为 12 个或 24 个单词组成的列表，它是钱包私钥的人类可读的形式。助记词是由私钥生成的，因此它可以用来恢复或备份钱包。（这是最重要的密码，不可丢失）

## 测试网

Sepolia Testnet Explorer（输入账户地址，查看交易详情）：https://sepolia.etherscan.io/

测试水龙头（免费获取测试网 ETH）：https://faucets.chain.link/

EVM networks list：https://chainlist.org/

## Gas

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
