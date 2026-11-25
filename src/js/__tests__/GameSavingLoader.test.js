import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('should load game saving using async/await', async () => {
  const saving = await GameSavingLoader.load();

  expect(saving).toBeInstanceOf(GameSaving);
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
