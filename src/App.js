import './styles/app.css';
import Poem from './components/Poem.js'
import Graphs from './components/Graphs.js'
import Navigation from './components/Navigation.js'

function App() {
  return (
    <>
      <div className="main">
        <Poem/>
        <Graphs/>
      </div>
      <Navigation/>
    </>
  );
}

export default App;
