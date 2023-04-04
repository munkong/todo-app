import {ThemeProvider, createGlobalStyle} from "styled-components";
import './App.css';
import TodoApp from "./features/todo/TodoApp";
import {Provider} from "react-redux";
import {store} from "./app/store";

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  text: '#0620a2',
  // fontFamily: 'Roboto',
  // fontFamily: 'Segoe UI',
  fontFamily: 'system-ui',
  // fontFamily: 'cursive',
  // fontFamily: 'sans-serif',
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily}
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
