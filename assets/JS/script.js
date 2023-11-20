/*- Script para a página de carrinho */

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
        listItem.textContent = `${item.item} - R$${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "btn-sm");
        removeButton.textContent = "Remover";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
    totalSpan.textContent = `R$${total}`;
}

document.getElementById("checkout").addEventListener("click", () => {
    alert(`Total da compra: R$${total}. Compra realizada com sucesso!`);
    cart = [];
    total = 0;
    updateCart();
});

/*- Script para a página de login */

// Função para verificar se o usuário e a senha são válidos
function verificarUsuarioSenha(usuario, senha) {
    // Obtém os dados de login armazenados no localStorage
    const dadosLogin = localStorage.getItem("dadosLogin");
  
    // Verifica se os dados de login estão presentes
    if (!dadosLogin) {
      return false;
    }
  
    // Decodifica os dados de login
    const dadosLoginDecodificados = JSON.parse(dadosLogin);
  
    // Verifica se o usuário e a senha correspondem aos dados armazenados no localStorage
    return dadosLoginDecodificados.usuario === usuario && dadosLoginDecodificados.senha === senha;
  }
  
  // Função para autenticar o usuário
  function autenticarUsuario(usuario, senha) {
    // Verifica se o usuário e a senha são válidos
    if (!verificarUsuarioSenha(usuario, senha)) {
      return false;
    }
  
    // Armazena os dados de login no localStorage
    localStorage.setItem("dadosLogin", JSON.stringify({
      usuario,
      senha
    }));
  
    // Retorna true para indicar que o usuário foi autenticado
    return true;
  }
  
  // Função para validar os campos de usuário e senha do formulário de login
  function validarFormularioLogin(usuario, senha) {
    // Verifica se o campo de usuário é obrigatório
    if (!usuario) {
      return false;
    }
  
    // Verifica se o campo de senha é obrigatório
    if (!senha) {
      return false;
    }
  
    // Retorna true para indicar que os campos são válidos
    return true;
  }
  
  // Função que é chamada quando o botão de login é clicado
  function login() {
    // Obtém os valores dos campos de usuário e senha
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    // Valida os campos de usuário e senha
    if (!validarFormularioLogin(usuario, senha)) {
      return;
    }
  
    // Autentica o usuário
    const autenticado = autenticarUsuario(usuario, senha);
  
    // Se o usuário for autenticado, redireciona para a página principal
    if (autenticado) {
      window.location.href = "pagina-principal.html";
    }
  }
  