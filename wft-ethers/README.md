# WTF ethers

## Provider 提供器类

连接上 infura 等节点，读取链上信息。

## Contract 合约类

读取链上的合约信息。address 相当于 API 的 base url，abi 相当于 API 的接口说明。

### 读取

```js
// 只读
const contract = new ethers.Contract(`address`, `abi`, `provider`);

// 可读写。signer 为签名
const contract = new ethers.Contract(`address`, `abi`, `signer`);
```

### 交易
