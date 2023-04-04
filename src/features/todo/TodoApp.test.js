import { render, screen } from '@testing-library/react';
import App from './TodoApp'
import {Provider} from "react-redux";
import {store} from "../../app/store";

test('renders application title', () => {
  render( <Provider store={store}> <App /> </Provider> );
  const textElement = screen.getByText(/React Todo App/i);
  expect(textElement).toBeInTheDocument();
});

test('renders no todo found', () => {
  render( <Provider store={store}> <App /> </Provider> );
  const textElement = screen.getByText(/No todo found/i);
  expect(textElement).toBeInTheDocument();
});
