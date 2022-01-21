element.addEventListener("change", (e)=>{
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;
    if (value) document.getElementById("pick").textContent = `Value Selected: ${value}`;
    else document.getElementById("pick").textContent = "";
});

//# sourceMappingURL=exchange.5ac7835b.js.map
