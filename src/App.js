import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
