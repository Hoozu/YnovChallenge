const provider = new ethers.providers.Web3Provider(window.etherum, "any");
await provider.send("eth_requestAcounts", []);
const signer = provider.getSigned();
console.log("Account:", await signer.getAddress());