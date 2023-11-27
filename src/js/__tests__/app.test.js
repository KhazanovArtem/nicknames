import  Validator from '../app'

test('check Validator', () => {
  const player = new Validator('Alex222_mix');
  const result = player.validateUsername();
  expect(result).toBe(true);
})