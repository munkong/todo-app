import TodoItem from "./TodoItem"
import styled from "styled-components";

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  //background-color: #e0c8eb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const NoTodoText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: chocolate;
`

const TodoList = ({list}) => {

  return (
    <Container>
      {list.length === 0 && <NoTodoText>No todo found</NoTodoText>}
      {list.map(item => (
        <TodoItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default TodoList