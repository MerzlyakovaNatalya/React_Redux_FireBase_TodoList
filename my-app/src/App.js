import { RealDate } from './realDate';
import './App.scss';
import { TodoList } from './todoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RealDate/>
      </header>
      <main>
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
