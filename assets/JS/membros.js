function addNewClass() {
  const className = document.getElementById('class-name').value;
  const classTime = document.getElementById('class-time').value;

  if (className && classTime) {
    const schedule = document.getElementById('schedule');
    const newClass = document.createElement('div');
    newClass.classList.add('schedule-scheduled'); // Adiciona a classe 'schedule-scheduled'
    

    // Obtendo a data atual para exibir junto com o horário da aula
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Formata a data como string

    newClass.innerHTML = `
      <h2>${className}</h2>
      <span><strong>Horário:</strong> ${classTime} - ${formattedDate}</span>
      <div><button class="button" onclick="cancelClass(this)">Cancelar</button></div>`;
    schedule.appendChild(newClass);
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

function cancelClass(element) {
  const classItem = element.parentNode; // Para remover a div pai do botão
  classItem.remove();
}
