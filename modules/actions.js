const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Fh0ZLhL9PMX1g7EtaJDa/scores';

/* eslint-disable  quote-props */
export default class Actions {
  static addScore() {
    const name = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user': name,
        'score': score,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  static clearValues() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }

  static refreshAll() {
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
  }
}