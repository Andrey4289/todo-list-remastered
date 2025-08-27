import './App.css';
import TopBar from './componenets/TopBar';
import Container from './componenets/Container';
import CreateButton from "./componenets/CreateButton"
import Title from "./componenets/Title"

function App() {
  return (
    <div className="app">
      <TopBar/>
      <Title/>
      <CreateButton/>
      <Container/>
    </div>
  );
}

export default App;
