const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Fh0ZLhL9PMX1g7EtaJDa/scores';

const addScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const clearValues = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

const refreshAll = () => {
  async function getScores() {
    const list = document.querySelector('#score-list');
    const highS = document.querySelector('.high-score');
    list.innerHTML = '';
    const response = await fetch(api);
    const data = await response.json();
    data.result.sort((a, b) => {
      const fa = a.user.toLowerCase();
      const fb = b.user.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    data.result.forEach((newScore) => {
      list.innerHTML += `
        <li>${newScore.user}: ${newScore.score}</li>
        `;
    });
    const highScore = data.result.sort((a, b) => a.score - b.score);
    highS.innerHTML = '';
    highS.innerHTML += `
    <div class='high-score'>High Score</div>
    <div class='container'>${highScore[highScore.length - 1].score}</div>`;
  }
  getScores();
};

export { addScore, clearValues, refreshAll };