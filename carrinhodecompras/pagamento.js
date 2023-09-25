function processPayment(event) {
    event.preventDefault();
  
    const cardholderName = document.getElementById('nome-cartao').value;
    const cardNumber = document.getElementById('nmr-cartao').value;
    const expiryDate = document.getElementById('dt-vencimento').value;
    const cvv = document.getElementById('cvv').value;
  
    stripe.createToken('card', {
      name: cardholderName,
      number: cardNumber,
      exp_month: expiryDate.slice(0, 2),
      exp_year: '20' + expiryDate.slice(3),
      cvc: cvv
    }).then(result => {
      if (result.error) {
        console.error(result.error);
        alert('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
      } else {
        console.log(result.token);
        alert('Pagamento processado com sucesso!');
      }
    });
  }
  
  document.getElementById('payment-form').addEventListener('submit', processPayment);