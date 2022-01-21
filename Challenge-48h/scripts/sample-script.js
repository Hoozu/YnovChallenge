// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();

  const YNV = await hre.ethers.getContractFactory("YNVToken");
  const ynv = await YNV.deploy();
  await ynv.deployed();

  const LOO = await hre.ethers.getContractFactory("Looney");
  const loo = await LOO.deploy();
  await loo.deployed();

  const swap = await hre.ethers.getContractFactory("TokenSwap");
  const sw = await swap.deploy();
  await sw.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("YNVToken deployed to:", ynv.address);
  console.log("Looney deployed to:", loo.address);
  console.log("TokenSwap deployed to:", sw.address);
  console.log("Looney deployed to:", sw.name);
  console.log("YNVToken deployed to:", ynv.name);
  console.log("YNVToken deployed to:", ynv.symbol);
  console.log("Looney deployed to:", sw.symbol);
  //console.log();
  console.log("-----------------------------------------");
  //console.log("Swap from:", sw.address);
  //console.log(await sw.approve('0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 100));
  // //console.log(" Transfer from:", JSON.stringify(await ynv.transfer('0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 2000), null, 2))
  // console.log(" the Wallet contains :", (await ynv.name()));
  console.log(" Balance of :", (await ynv.balanceOf('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')).toString());

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
