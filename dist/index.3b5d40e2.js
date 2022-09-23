// ELEMENTS WITH EVENT
const productsQuantity = document.querySelector("#products");
const ordersPerMonth = document.querySelector("#orders");
const selectPackage = document.querySelector("#package");
const dropdownMenu = document.querySelector(".select__input, :after");
const accountingPrice = document.querySelector("#accounting");
const terminalPrice = document.querySelector("#terminal");
// HIDDEN ELEMENTS
const productsData = document.querySelector('[data-id = "products"]');
const productsCalculate = document.querySelector('[data-id = "products"]').children[1];
const productsPrice = document.querySelector('[data-id = "products"]').children[2];
const ordersData = document.querySelector('[data-id = "orders"]');
const ordersCalculate = document.querySelector('[data-id = "orders"]').children[1];
const ordersPrice = document.querySelector('[data-id = "orders"]').children[2];
const packageData = document.querySelector('[data-id = "package"]');
const packageCalculate = document.querySelector('[data-id = "package"]').children[1];
const packagePrice = document.querySelector('[data-id = "package"]').children[2];
const totalPrice = document.querySelector(".total__price");
totalPrice.textContent = "$0";
productsQuantity.addEventListener("input", function() {
    if (productsQuantity.value.length > 0) {
        packageData.classList.add("open");
        totalPrice.classList.add("open");
        packageCalculate.textContent = productsQuantity.value + " * " + 0.5;
        packagePrice.textContent = "$" + productsQuantity.value * 0.5;
        updateTotal();
    } else if (productsQuantity.value.length === 0) packageData.classList.remove("open");
});
ordersPerMonth.addEventListener("input", function() {
    if (ordersPerMonth.value.length > 0) {
        ordersData.classList.add("open");
        totalPrice.classList.add("open");
        ordersCalculate.textContent = ordersPerMonth.value + " * " + 0.5;
        ordersPrice.textContent = "$" + ordersPerMonth.value * 0.5;
        updateTotal();
    } else if (ordersPerMonth.value.length === 0) ordersData.classList.remove("open");
});
dropdownMenu.addEventListener("click", function() {
    dropdownMenu.parentElement.classList.toggle("open");
});
function updateTotal() {
    const productsSum = productsQuantity.value * 0.5;
    const ordersSum = ordersPerMonth.value * 0.5;
    totalPrice.textContent = "$" + (productsSum + ordersSum);
}

//# sourceMappingURL=index.3b5d40e2.js.map
