import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styled from "styled-components";
import {useSelector} from "react-redux";

const Container = styled.div`
  width: 400px;
  padding: 20px;
`

const Header = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2rem;
  text-align: center;
  color: ${props => props.theme.text};
`
const TodoApp = () => {

  const todos = useSelector(state => state.todos.values);

  return (
    <Container>
      <Header>React Todo App</Header>
      <TodoInput/>
      <TodoList list={todos}/>
    </Container>
  );
}

export default TodoApp;
