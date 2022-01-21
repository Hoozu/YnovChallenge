// const { expect } = require("hardhat");

// async function main() {
//     const [owner, addr1, addr2] = console.log(await ethers.getSigners());

//     const Token = console.log(await ethers.getContractFactory("TokenSwap"));

//     const hardhatToken = console.log(await Token.deploy());

//     // Transfer 50 tokens from owner to addr1
//     console.log(await hardhatToken.transfer(addr1.address, 50));
//     console.log(expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50));

//     // Transfer 50 tokens from addr1 to addr2
//     console.log(await hardhatToken.connect(addr1).transfer(addr2.address, 50));
//     console.log(expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50));

//     console.log(await hardhatToken.approve('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 100000000, {from: addr1}));
//     console.log(await hardhatToken.approve('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 100000000, {from: addr2}));

// };

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });