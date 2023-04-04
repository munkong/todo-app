import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import {store} from "../../app/store";
import TodoItem from "./TodoItem";

test('TodoItem able to display todo item', async () => {
  const todoText = 'Hello World';
  render( <Provider store={store}> <TodoItem item={{ 'text': todoText }} />, </Provider> );
  const textElement = screen.getByText(todoText);
  expect(textElement).toBeInTheDocument();
})

test('TodoItem able to display remove button', async () => {
  const removeText = 'remove me';
  render( <Provider store={store}> <TodoItem item={{ 'text': removeText }} />, </Provider> );
  const buttonElement = screen.getByRole('button', removeText);
  expect(buttonElement).toBeInTheDocument();
})

test('TodoItem able to click remove button', async () => {
  const removeText = 'remove me';
  render( <Provider store={store}> <TodoItem item={{ 'text': removeText }} />, </Provider> );
  const removeButton = screen.queryByRole('button', { name: /Remove/i })
  fireEvent.click(removeButton);
})
