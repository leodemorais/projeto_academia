function addNewClass() {
  const className = document.getElementById('class-name').value;
  const classTime = document.getElementById('class-time').value;

  if (className && classTime) {
    const schedule = document.getElementById('schedule');
    
    // Div para a aula agendada
    const scheduledDiv = document.createElement('div');
    scheduledDiv.classList.add('schedule-scheduled');

    // Obtendo a data atual para exibir junto com o horário da aula
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Formata a data como string

    scheduledDiv.innerHTML = `
      <h2>${className}</h2>
      <p><strong>Horário:</strong> ${classTime} - ${formattedDate}</p>
      <button class="button" onclick="cancelClass(this)">Cancelar</button>`;
    
    // Div para quando não houver aula agendada
    const noClassDiv = document.createElement('div');
    noClassDiv.innerHTML = `
      <h2>Não há aula agendada.</h2>
      <br> <br>
      <button class="button" onclick="closeSchedule()">Fechar</button>`;
    
    // Adicionando ambas as divs à div "schedule"
    schedule.appendChild(scheduledDiv);
    schedule.appendChild(noClassDiv);
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

function cancelClass(element) {
  const classItem = element.parentNode; // Para remover a div pai do botão
  classItem.remove();
}

function closeSchedule() {
  const schedule = document.getElementById('schedule');
  schedule.innerHTML = ''; // Remove todo o conteúdo dentro da div 'schedule'
}
