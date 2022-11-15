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
    list.innerHTML = '';
    const response = await fetch(api);
    const data = await response.json();
    data.result.forEach((newScore) => {
      list.innerHTML += `
        <li>${newScore.user}: ${newScore.score}</li>
        `;
    });
  }
  getScores();
};

export { addScore, clearValues, refreshAll };