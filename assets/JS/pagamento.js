document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  switch (paymentMethod) {
    case 'pix':
      console.log('Informações para pagamento via Pix:');
      var chavePix = document.getElementById('chavePix').value;
      var valorPix = document.getElementById('valorPix').value;

      // Lógica para pagamento via Pix
      console.log('Informações para pagamento via Pix:');
      console.log('Chave Pix:', chavePix);
      console.log('Valor a pagar:', valorPix);
      break;
    case 'cartao':
      console.log('Informações para pagamento com Cartão:');
        var numeroCartao = document.getElementById('numeroCartao').value;
        var nomeTitular = document.getElementById('nomeTitular').value;
        var validadeCartao = document.getElementById('validadeCartao').value;
        var codigoSeguranca = document.getElementById('codigoSeguranca').value;
      
        console.log('Informações para pagamento com Cartão:');
        console.log('Número do Cartão:', numeroCartao);
        console.log('Nome do Titular:', nomeTitular);
        console.log('Validade:', validadeCartao);
        console.log('Código de Segurança:', codigoSeguranca);
        document.getElementById('numeroCartao').value = '';
        document.getElementById('nomeTitular').value = '';
        document.getElementById('validadeCartao').value = '';
        document.getElementById('codigoSeguranca').value = '';      
      break;
    case 'boleto':
      console.log('Informações para pagamento com Boleto:');
      var cpfBoleto = document.getElementById('cpfBoleto').value;
      var nomeBoleto = document.getElementById('nomeBoleto').value;
      var enderecoBoleto = document.getElementById('enderecoBoleto').value;
      var valorBoleto = document.getElementById('valorBoleto').value;

      // Lógica para pagamento com Boleto
      console.log('Informações para pagamento com Boleto:');
      console.log('CPF:', cpfBoleto);
      console.log('Nome Completo:', nomeBoleto);
      console.log('Endereço:', enderecoBoleto);
      console.log('Valor a pagar:', valorBoleto);
      break;
    default:
      console.log('Selecione uma forma de pagamento');
  }
});

document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    var paymentDetails = document.querySelectorAll('.paymentDetails');
    paymentDetails.forEach(function(details) {
      details.style.display = 'none';
    });

    var selectedPayment = document.getElementById(this.value + 'Form');
    selectedPayment.style.display = 'flex';
  });
});

function chargeStyle(element) {
  const isActive = element.classList.contains('active');
  
  document.querySelectorAll('.pagamento__icon-pix, .pagamento__icon-cartao, .pagamento__icon-boleto').forEach(el => {
    el.classList.remove('active');
  });

  if (!isActive) {
    element.classList.add('active');
  }
}