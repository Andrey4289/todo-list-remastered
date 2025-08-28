import './App.css';
import NavigationHeader from './componenets/NavigationHeader';
import Container from './componenets/Container';
import CreateButton from "./componenets/CreateButton"
import Title from "./componenets/Title"

function App() {
  return (
    <div className="app">
      <NavigationHeader/>
      <Title/>
      <CreateButton/>
      <Container/>
    </div>
  );
}

export default App;
