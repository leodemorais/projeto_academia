// Carrinho de compras simulado
const cartItems = [];
let total = 0;

// Função para adicionar itens ao carrinho
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  total += price;

  // Atualiza o carrinho visualmente
  updateCart();
}

function removeItemFromCart(itemName, price) {
  const index = cartItems.findIndex(item => item.name === itemName && item.price === price);
  if (index !== -1) {
    cartItems.splice(index, 1); // Remove o item do array
    total -= price;

    updateCart(); // Atualiza visualmente o carrinho
  }
}

document.querySelectorAll('.plan-card-a__checkbox').forEach(checkbox => {
  checkbox.addEventListener('click', (event) => {
    const planCard = checkbox.closest('.plan-card-a');
    planCard.classList.toggle('selected');

    const planName = planCard.querySelector('.plan-card-a__plan-name').textContent;
    const price = parseFloat(planCard.querySelector('.plan-card-a__info-preco').textContent.replace('R$', ''));

    if (planCard.classList.contains('selected')) {
      addToCart(planName, price);
    } else {
      removeItemFromCart(planName, price);
    }
  });
});

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

  totalElement.textContent = `Total: R$${total}`;
}

function addToCartAddon(addonName, price) {
  cartItems.push({ name: addonName, price: price });
  total += price;

  updateCart();
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