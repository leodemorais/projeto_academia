
      // Get the form element
      const form = document.querySelector('.contactForm__container');

      // Add event listener for form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Get the form inputs
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Perform form validation
        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
          alert('Preencha todos os campos, por favor!');
          return;
        }

        // Perform form submission
        // Replace this with your actual form submission logic
        console.log('Mensagem enviada com sucesso!');
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);

        // Reset the form
        form.reset();
      });
 