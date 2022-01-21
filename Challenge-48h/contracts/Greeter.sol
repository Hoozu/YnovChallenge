//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract YNVToken is ERC20 {
    constructor() ERC20("YToken", "YNV") {
        _mint(msg.sender, 5005);
    }
}

contract Looney is ERC20 {
    constructor() ERC20("LOOToken", "LOO") {
        _mint(msg.sender, 100000);
    }
}

contract TokenSwap {
    constructor(
        // address _token1,
        // address _owner1,
        // uint _amount1,
        // address _token2,
        // address _owner2,
        // uint _amount2
    ) {
        // token1 = IERC20(_token1);
        // owner1 = _owner1;
        // amount1 = _amount1;
        // token2 = IERC20(_token2);
        // owner2 = _owner2;
        // amount2 = _amount2;
    }

    function swap(address owner1, address owner2, address token1, address token2, uint amount1, uint amount2) public {
        require(msg.sender == owner1 || msg.sender == owner2, "Not authorized");
        require(
            IERC20(token1).allowance(owner1, address(this)) >= amount1,
            "Token 1 allowance too low"
        );
        require(
            IERC20(token2).allowance(owner2, address(this)) >= amount2,
            "Token 2 allowance too low"
        );

        _safeTransferFrom(IERC20(token1), owner1, owner2, amount1);
        _safeTransferFrom(IERC20(token2), owner2, owner1, amount2);
    }

    function _safeTransferFrom(
        IERC20 token,
        address sender,
        address recipient,
        uint amount
    ) private {
        bool sent = token.transferFrom(sender, recipient, amount);
        require(sent, "Token transfer failed");
    }
}

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
