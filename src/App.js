import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init'
import NavbarCom from './componets/NavbarCom';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      
      <NavbarCom />
    </div>
  );
}

export default App;