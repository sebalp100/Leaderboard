import './style.css';

import { addScore, clearValues, refreshAll } from '../modules/actions.js';

document.addEventListener('DOMContentLoaded', refreshAll());

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();

  addScore();
  clearValues();
});

document.querySelector('#refresh').addEventListener('click', () => {
  refreshAll();
});