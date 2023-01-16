const hre = require("hardhat");

async function main() {
    const ContractCode = await hre.ethers.getContractFactory("HYCOToken");
    const contractCode = await ContractCode.deploy("0x4720f1796314FBE7d242Ae5848D6a6689CC843dc", "0xeb54c0baEA6afe00332d9Db185ff4b0228321548");

    await contractCode.deployed();

    console.log("HYCOToken deployed to : ", contractCode.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
