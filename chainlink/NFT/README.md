# Chainlink VRF

## 合约创建步骤

1. 创建 NFT 合约
2. 加入 metadata：
   ```sol
   string constant META_DATA_1 = "ipfs://QmXw7TEAJWKjKifvLE25Z9yjvowWk2NWY3WgnZPUto9XoA";
   string constant META_DATA_2 = "ipfs://QmTFXZBmmnSANGRGhRVoahTTVPJyGaWum8D3YicJQmG97m";
   string constant META_DATA_3 = "ipfs://QmSM5h4WseQWATNhFWeCbqCTAGJCZc11Sa1P5gaXk38ybT";
   ```
3. 继承 VRF 合约
4. 配置 VRF 参数
   修改 callbackGasLimit
   修改 keyHash
5. 在 mint 函数中发送请求
6. 编写 fulfill 函数
7. 创建订阅（subscription）
8. 给订阅充值
9. 在订阅中添加 consumer 合约
10. 通过 tokenURI 查看 metadata
11. 打开 opensea testnet 进行查看

## 文档

- 开始使用：https://docs.chain.link/vrf/v2/getting-started
- 创建、查看订阅：https://vrf.chain.link/

## 参考

https://gist.github.com/QingyangKong/6006556d5fc33a903cdf79376ceea6e8
