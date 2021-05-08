import ToDo from './components/ToDo'
import Menu from './components/Menu'
import SearchTask from './components/SearchTask'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDo />
      <Menu />
      <SearchTask />
    </div>
  );
}

export default App;
