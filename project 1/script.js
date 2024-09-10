document.getElementById('add-player').addEventListener('click', addPlayer);

function addPlayer() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country = document.getElementById('country').value;
  const score = document.getElementById('score').value;

  if (firstName === '' || lastName === '' || country === '' || score === '') {
    alert('Please fill in all fields');
    return;
  }

  const playerList = document.getElementById('players-list');

  
  const playerRow = document.createElement('div');
  playerRow.className = 'player-row';
  playerRow.innerHTML = `
    <span>${firstName} ${lastName}</span>
    <span>${country}</span>
    <span class="player-score">${score}</span>
    <div class="player-actions">
      <button class="delete">🗑</button>
      <button class="increase">+5</button>
      <button class="decrease">-5</button>
    </div>
  `;

  playerList.appendChild(playerRow);

  
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('country').value = '';
  document.getElementById('score').value = '';

  
  playerRow.querySelector('.delete').addEventListener('click', function() {
    playerRow.remove();
  });

  playerRow.querySelector('.increase').addEventListener('click', function() {
    let scoreElement = playerRow.querySelector('.player-score');
    scoreElement.textContent = parseInt(scoreElement.textContent) + 5;
  });

  playerRow.querySelector('.decrease').addEventListener('click', function() {
    let scoreElement = playerRow.querySelector('.player-score');
    scoreElement.textContent = parseInt(scoreElement.textContent) - 5;
  });
}
