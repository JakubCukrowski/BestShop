const productsQuantity = document.querySelector("#products");
const ordersPerMonth = document.querySelector("#orders");
const selectPackage = document.querySelector("#package");
const dropdownInput = document.querySelector(".select__input");
const dropdownMenu = document.querySelector(".select__dropdown");
const accountingPrice = document.querySelector("#accounting");
const terminalPrice = document.querySelector("#terminal");
const packages = document.querySelector(`[data-id="package"]`);
const listItems = document.querySelectorAll(".list__item");
const totalPrice = document.querySelector(".total__price");
const accountingPriceFromCheckBox = document.querySelector(`[data-id="accounting"] .item__price`);
const terminalPriceFromCheckBox = document.querySelector(`[data-id="terminal"] .item__price`);
accountingPriceFromCheckBox.value = 0;
packages.children[2].value = 0;
totalPrice.textContent = "$0";
terminalPriceFromCheckBox.value = 0;
const inputPrice = (e)=>{
    for (const item of listItems)if (item.dataset.id === e.target.id) {
        if (e.currentTarget.value.length > 0) {
            item.classList.add("open");
            item.children[1].textContent = e.target.value + "*" + 0.5;
            item.children[2].textContent = "$" + e.target.value * 0.5;
        } else if (e.currentTarget.value.length === 0) {
            item.classList.remove("open");
            item.children[2].textContent = "$0";
        }
    }
    summaryTotal();
};
const togglePackages = ()=>{
    selectPackage.classList.toggle("open");
};
const chooseFromDrop = (e)=>{
    if (e.target.dataset.value === "basic") {
        packages.classList.add("open");
        packages.children[1].textContent = "Basic";
        packages.children[2].textContent = "$10";
        packages.children[2].value = 10;
        selectPackage.classList.remove("open");
        dropdownInput.textContent = packages.children[1].textContent;
    } else if (e.target.dataset.value === "professional") {
        packages.classList.add("open");
        packages.children[1].textContent = "Professional";
        packages.children[2].textContent = "$25";
        packages.children[2].value = 25;
        selectPackage.classList.remove("open");
        dropdownInput.textContent = packages.children[1].textContent;
    } else if (e.target.dataset.value === "premium") {
        packages.classList.add("open");
        packages.children[1].textContent = "Premium";
        packages.children[2].textContent = "$60";
        packages.children[2].value = 60;
        selectPackage.classList.remove("open");
        dropdownInput.textContent = packages.children[1].textContent;
    }
    summaryTotal();
};
const handleAccounting = ()=>{
    if (accountingPrice.checked === true) {
        for (const listItem of listItems)if (listItem.dataset.id === "accounting") {
            listItem.classList.add("open");
            accountingPriceFromCheckBox.value = 30;
            accountingPriceFromCheckBox.textContent = "$" + accountingPriceFromCheckBox.value;
        }
    } else {
        for (const listItem1 of listItems)if (listItem1.dataset.id === "accounting") {
            listItem1.classList.remove("open");
            accountingPriceFromCheckBox.value = 0;
            accountingPriceFromCheckBox.textContent = "$" + accountingPriceFromCheckBox.value;
        }
    }
    summaryTotal();
};
const handleTerminal = ()=>{
    if (terminalPrice.checked === true) {
        for (const listItem of listItems)if (listItem.dataset.id === "terminal") {
            listItem.classList.add("open");
            terminalPriceFromCheckBox.value = 15;
            terminalPriceFromCheckBox.textContent = "$" + terminalPriceFromCheckBox.value;
        }
    } else {
        for (const listItem1 of listItems)if (listItem1.dataset.id === "terminal") {
            listItem1.classList.remove("open");
            terminalPriceFromCheckBox.value = 0;
            terminalPriceFromCheckBox.textContent = "$" + terminalPriceFromCheckBox.value;
        }
    }
    summaryTotal();
};
const summaryTotal = ()=>{
    const productsPrice = productsQuantity.value;
    const ordersPrice = ordersPerMonth.value;
    const packagePrice = packages.children[2].value;
    const accountingPrice = accountingPriceFromCheckBox.value;
    const terminalPrice = terminalPriceFromCheckBox.value;
    totalPrice.textContent = "$" + ((+productsPrice + +ordersPrice) * 0.5 + +packagePrice + +accountingPrice + +terminalPrice);
};
productsQuantity.addEventListener("input", inputPrice);
ordersPerMonth.addEventListener("input", inputPrice);
dropdownInput.addEventListener("click", togglePackages);
dropdownMenu.addEventListener("click", chooseFromDrop);
accountingPrice.addEventListener("change", handleAccounting);
terminalPrice.addEventListener("change", handleTerminal);

//# sourceMappingURL=index.3b5d40e2.js.map
