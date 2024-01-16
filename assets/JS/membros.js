function addNewClass() {
  const className = document.getElementById('class-name').value;
  const classTime = document.getElementById('class-time').value;
  const dateStart = document.getElementById('date-start').value;

  if (className && classTime && dateStart) {
    const schedule = document.getElementById('schedule');
    
    // Criar uma string única para representar data e hora do agendamento
    const uniqueDateTime = `${dateStart} ${classTime}`;

    // Verificar se já existe um agendamento para a mesma data e hora
    if (!isDuplicateAppointment(uniqueDateTime)) {
      // Div para aula agendada
      const scheduledDiv = document.createElement('div');
      scheduledDiv.classList.add('schedule-scheduled');

      scheduledDiv.innerHTML = `
        <h2>${className}</h2>
        <p><strong>Data e Horário:</strong> ${uniqueDateTime}</p>
        <button class="button" onclick="cancelClass(this)">Cancelar</button>`;

      // Adicionar a div com aula agendada à div "schedule"
      schedule.appendChild(scheduledDiv);
    } else {
      alert('Já existe um agendamento para esse horário.');
    }
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

function isDuplicateAppointment(uniqueDateTime) {
  const scheduledDivs = document.querySelectorAll('.schedule-scheduled');

  for (const div of scheduledDivs) {
    const scheduledDateTime = div.querySelector('p').innerText.split(': ')[1];

    if (scheduledDateTime === uniqueDateTime) {
      return true;
    }
  } 
  return false;
}

function cancelClass(element) {
  const classItem = element.parentNode; // Para remover a div pai do botão
  classItem.remove();
}

function closeSchedule() {
  const schedule = document.getElementById('schedule');
  schedule.innerHTML = ''; // Remove todo o conteúdo dentro da div 'schedule'
}

window.onload = function() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
  const yyyy = today.getFullYear();

  const minDate = dd + '-' + mm + '-' + yyyy;
  document.getElementById('date-start').min = minDate;
};