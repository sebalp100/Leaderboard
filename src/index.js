import './style.css';

import Score from '../modules/score.js';

import Data from '../modules/data.js';

import Actions from '../modules/actions.js';

document.addEventListener('DOMContentLoaded', Actions.display);

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const newScore = new Score(name, score);
  Actions.addScore(newScore);
  Data.setLocalStorage(newScore);
  Actions.clearValues();
});

document.querySelector('#refresh').addEventListener('click', () => {
  Actions.refreshAll();
});