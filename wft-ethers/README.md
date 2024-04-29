# WTF ethers

## Provider 提供器类

连接上 infura 等节点，读取链上信息。

## 合约实例构建

```js
// 只读
const contract = new ethers.Contract(`address`, `abi`, `provider`);

// 可读写。signer 为签名，（就是钱包）
const contract = new ethers.Contract(`address`, `abi`, `signer`);
```

## 基本流程

```js
// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 1. 连接主网
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// 2. 连接钱包
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider); // signer

// 3. 声明合约实例
const contract = new ethers.Contract(
  address /* 合约地址 */,
  abi /* 合约 ABI */,
  provider /* provider 或 signer */
);

// ...
```
