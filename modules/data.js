export default class Data {
  static getLocalStorage() {
    let allScores;
    if (localStorage.getItem('allScores') === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(localStorage.getItem('allScores'));
    }
    return allScores;
  }

  static setLocalStorage(newScore) {
    const allScores = Data.getLocalStorage();
    allScores.push(newScore);
    localStorage.setItem('allScores', JSON.stringify(allScores));
  }
}