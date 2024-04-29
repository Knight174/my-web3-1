import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

var wallet; // 钱包
const regex = /^0x00020240429.*$/; // 表达式
var isValid = false;
while (!isValid) {
  wallet = ethers.Wallet.createRandom(); // 随机生成钱包，安全
  isValid = regex.test(wallet.address); // 检验正则表达式
  //console.log(wallet.address)
}
// 打印靓号地址与私钥
console.log(`\n靓号地址：${wallet.address}`);
console.log(`靓号私钥：${wallet.privateKey}\n`);
