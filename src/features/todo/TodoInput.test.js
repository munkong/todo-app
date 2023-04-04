import {fireEvent, render, screen} from '@testing-library/react';
import TodoInput from './TodoInput';
import {store} from "../../app/store";
import {Provider} from "react-redux";

it('TodoInput able to enter todo', async () => {
  render( <Provider store={store}> <TodoInput/>, </Provider> );
  const input = screen.queryByPlaceholderText(/Enter a todo/);
  fireEvent.change(input, {target: {value: 'test'}});
  expect(input.value).toBe('test');
});

it('Input is cleared after add todo', async () => {
  render( <Provider store={store}> <TodoInput/>, </Provider> );
  const input = screen.queryByPlaceholderText(/Enter a todo/);
  fireEvent.change(input, {target: {value: 'test'}});
  expect(input.value).toBe('test');
  const addButton = screen.queryByRole('button', { name: /Add/i })
  fireEvent.click(addButton);
  expect(input.value).toBe('');
});
