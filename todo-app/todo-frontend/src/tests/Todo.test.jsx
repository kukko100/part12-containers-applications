// src/tests/Todo.test.jsx

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Todo Component', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    mock.onGet('/todos').reply(200, [
      { id: 1, text: 'Sample todo', done: false },
      { id: 2, text: 'Another todo', done: true }
    ]);
  });

  it('extracts a todo component from the mocked response', async () => {
    const response = await axios.get('/todos');
    const todo = response.data[1];
    expect(todo.text).toBe('Another todo');
    expect(todo.done).toBe(true);
  });

  afterAll(() => {
    mock.restore();
  });
});
