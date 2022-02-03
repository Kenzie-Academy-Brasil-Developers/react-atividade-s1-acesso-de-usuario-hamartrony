import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import RestrictedPage from './components/RestrictedPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = 'Hamart'

  function Login(){
    setIsLoggedIn(false)
  }
  function Logout(){
    setIsLoggedIn(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} Login={() => Login()} Logout={() => Logout()} user={user}></RestrictedPage>

        
      </header>
    </div>
  );
}

export default App;
