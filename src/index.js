import './style.css';

import Actions from '../modules/actions.js';

document.addEventListener('DOMContentLoaded', Actions.refreshAll());

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();

  Actions.addScore();
  Actions.clearValues();
});

document.querySelector('#refresh').addEventListener('click', () => {
  Actions.refreshAll();
});