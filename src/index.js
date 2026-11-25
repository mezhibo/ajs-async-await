import GameSavingLoader from './js/GameSavingLoader';

async function init() {
  try {
    const saving = await GameSavingLoader.load();
    document.getElementById('result').textContent = JSON.stringify(saving, null, 2);
  } catch (error) {
    document.getElementById('result').textContent = error.message;
  }
}

init();
