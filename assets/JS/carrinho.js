const cartItems = [];
let total = 0;

function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  total += price;
  updateCart();
}

function addToCartAddon(addonName, price) {
  const existingItemIndex = cartItems.findIndex(item => item.name === addonName && item.price === price);

  if (existingItemIndex === -1) {
    cartItems.push({ name: addonName, price: price });
    total += price;
  }
  updateCart();
}

function removeItemFromCart(itemName, price) {
  const index = cartItems.findIndex(item => item.name === itemName && item.price === price);
  if (index !== -1) {
    cartItems.splice(index, 1);
    total -= price;
    updateCart();
  }
}

function removeAddonFromCart(addonName, price) {
  const index = cartItems.findIndex(item => item.name === addonName && item.price === price);
  if (index !== -1) {
    cartItems.splice(index, 1);
    total -= price;

    updateCart();
  }
}

function toggleCheckbox(checkbox) {
  const isChecked = checkbox.checked;
  const addonName = checkbox.dataset.addonName;
  const addonPrice = parseFloat(checkbox.dataset.addonPrice);

  if (isChecked) {
    addToCartAddon(addonName, addonPrice);
  } else {
    removeAddonFromCart(addonName, addonPrice);
  }
}

// Função para atualizar visualmente o carrinho na interface
function updateCart() {
  const cartElement = document.getElementById("cart");
  const totalElement = document.getElementById("total");

  cartElement.innerHTML = "";
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name}: R$${item.price}/mês`;
    cartElement.appendChild(listItem);
  });

  totalElement.textContent = `R$${total}`;
}

// Selecionar todos os elementos com a classe 'addon-checkbox' e adicionar o evento de clique
const checkboxes = document.querySelectorAll('.addon-checkbox');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', (event) => {
    toggleCheckbox(checkbox);
  });
});

// Adicionar evento de clique aos botões de adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const planName = button.parentElement.querySelector('.plan-card-a__plan-name').textContent;
    const price = parseFloat(button.parentElement.querySelector('.plan-card-a__info-preco').textContent.replace('R$', ''));

    addToCart(planName, price);
  });
});
