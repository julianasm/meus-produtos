import ToDo from './components/ToDo'
import Menu from './components/Menu'
import SearchTask from './components/SearchTask'
import NewTaskButton from './components/NewTaskButton'
import './App.css';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <ToDo />
      <Menu />
      <SearchTask />
      <NewTaskButton />
      <CreateTask />
    </div>
  );
}

export default App;
