import './App.css';
import NavigationHeader from './componenets/NavigationHeader';
import Table from './componenets/Table';
import CreateButton from "./componenets/CreateButton"
import Title from "./componenets/Title"

function App() {
  return (
    <div className="app">
      <NavigationHeader/>
      <Title/>
      <CreateButton/>
      <Table/>
    </div>
  );
}

export default App;
