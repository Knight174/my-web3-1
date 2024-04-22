// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./IECR20";

contract ERC20 is IERC20 {
    // 状态变量定义
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;
    uint256 public override totalSupply; // 代币总供给
    // 代币信息（可选）：名称，代号，小数位数
    string public name; // 代币名称
    string public symbol; // 代币缩写
    uint8 public decimals = 18; // 小数位数

    // 定义函数
    // 构造函数
    constructor(string memory name_, string memory symbol_) {
        name = name_; // 代币名称（例如：Bitcoin、Ether、USD Coin）
        symbol = symbol_; // 代币的缩写（例如：BTH、ETH、USDC）
    }
    // 其他函数
    // （直接）转账（土狗币会加入税收、分红、抽奖等逻辑）
    function transfer(
        address recipient,
        uint amount
    ) external override returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }
    // 授权（给spender批准一些额度amount）
    function approval(
        address spender,
        uint amount
    ) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    // 授权转账（sender向recipient转amount金额）
    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external override returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    // 非IERC20标准的一些额外函数
    // 铸造代币函数
    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount); // 代币从零地址（address(0)）转移过来
    }
    // 销毁代币函数
    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount); // 转移到零地址销毁
    }
}
