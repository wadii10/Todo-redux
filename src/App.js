import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodosList from "./Components/TodosList";

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          <TodosList />
        </div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
