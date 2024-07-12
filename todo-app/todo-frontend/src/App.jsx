import './App.css';
import TodoView from './Todos/TodoView'

function App() {
  return (
    <div className="App">
      <p>has been modified from vscode while app running inside a container, changed happened in real-time</p>
      <TodoView />
    </div>
  );
}

export default App;
