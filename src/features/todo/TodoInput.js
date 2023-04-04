import Button from "../../components/style/Button";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addTodo} from "./todosSlice";
import {useState} from "react";
import uuid from "react-uuid";

const Container = styled.div`
  //background-color: #61dafb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const AddButton = styled(Button)`
  pointer-events: ${props => props.disable ? "none" : "auto"};
  background-color: ${props => props.disable ? "gray" : "#032091"};
`

const Input = styled.input`
  font-family: ${props => props.theme.fontFamily};
  width: 50%;
`
const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo({id: uuid(), text: todo}));
    setTodo("");
    setDisable(true);
  }

  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
    setDisable(!e.target.value);
  }

  const inputKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  }

  return (
    <Container>
      <Input type="text"
             name="todo"
             value={todo}
             placeholder={"Enter a todo"}
             onChange={inputChangeHandler}
             onKeyPress={inputKeyPressHandler}
      />
      <AddButton onClick={addTodoHandler} disable={disable}>Add</AddButton>
    </Container>
  )
}

export default TodoInput
