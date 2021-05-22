import ToDo from './components/ToDo'
import Menu from './components/Menu'
import SearchTask from './components/SearchTask'
import NewTaskButton from './components/NewTaskButton'
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
  return (
      <div className="App">
      <ToDo />
      <Menu />
      <SearchTask />
      <NewTaskButton />
      </div>
  );
}

export default App;
