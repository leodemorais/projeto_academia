let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalSpan = document.getElementById("total");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = `${item.item} - $${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "btn-sm");
        removeButton.textContent = "Remover";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
    totalSpan.textContent = `$${total}`;
}

document.getElementById("checkout").addEventListener("click", () => {
    alert(`Total da compra: $${total}. Compra realizada com sucesso!`);
    cart = [];
    total = 0;
    updateCart();
});
