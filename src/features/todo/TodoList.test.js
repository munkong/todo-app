import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../app/store";
import TodoItem from "./TodoItem";
import React from "react";
import TodoList from "./TodoList";

test('TodoList able to display item', async () => {
  const todoList = [
    {
      id: '56cc5779-5669-b2f2-683a-e10db2d548c6',
      text: 'learn react'
    },
    {
      id: '1597782c-7061-059a-1060-01555dc3c2bf',
      text: 'do demo'
    },
  ]
  render( <Provider store={store}> <TodoList list={todoList} />, </Provider> );
  screen.getByText('learn react');
  screen.getByText('do demo');
})
