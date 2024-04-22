// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// IERC20 接口定义
interface IERC20 {
    // 转账 from 金矿， to 基地
    event Transfer(
        address indexed sender,
        address indexed recipient,
        uint value
    );

    // 授权/批准 owner 西半牙王室，spender 哥伦布
    event Approval(address indexed owner, address indexed spender, uint value);

    // 返回代币总供给（铸造而来）
    function totalSupply() external view returns (uint256);

    // 返回账户余额
    function balanceOf(address account) external view returns (uint256);

    // 返回授权额度
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    // 转账 recipient 接收者， amount 代币数量单位
    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);

    // 授权
    function approval(address spender, uint256 amount) external returns (bool);

    // 授权转账
    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);
}
