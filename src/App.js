import dbRef, { username } from './server/firebase';
import './App.css';

function App() {
  return (
    <div className="App">
      {username}
    </div>
  );
}

export default App;
