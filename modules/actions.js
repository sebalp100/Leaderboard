class Data {
  static getLocalStorage() {
    let allScores;
    if (localStorage.getItem('allScores') === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(localStorage.getItem('allScores'));
    }
    return allScores;
  }
}

export default class Actions {
  static display() {
    const books = Data.getLocalStorage();

    books.forEach((newScore) => Actions.addScore(newScore));
  }

  static addScore(newScore) {
    if (newScore.name !== undefined) {
      const list = document.querySelector('#score-list');
      const newRow = document.createElement('tr');

      newRow.innerHTML = `
        <li>${newScore.name}:</li>
        <li>${newScore.score}</li>
        `;
      list.appendChild(newRow);
    }
  }

  static clearValues() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }

  static refreshAll() {
    const scores = Data.getLocalStorage();
    const list = document.querySelector('#score-list');
    list.parentElement.remove();
    scores.splice(0, scores.length);
    localStorage.setItem('allScores', JSON.stringify(scores));
    window.location.reload()
  }
}