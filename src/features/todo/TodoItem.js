import Button from "../../components/style/Button";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {removeTodo} from "./todosSlice";

const Container = styled.div`
  //background-color: #cbe6c0;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Text = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.text};
`

const RemoveButton = styled(Button)`
  &:hover {
    background-color: #de0909;
  }
`

const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>{item.text}</Text>
      <RemoveButton onClick={() => dispatch(removeTodo(item))}>Remove</RemoveButton>
    </Container>
  );
}

export default TodoItem
