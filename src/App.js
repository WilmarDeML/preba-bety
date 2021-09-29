import './App.css';
import { Route } from 'react-router-dom'
import Head from './components/Head'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import HandPage from './components/HandPage'
import Recuperar from './components/RecuperarPass';
import Terminos from './components/Terminos';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Head} />
      <Route path='/' exact component={HandPage} />
      <Route path='/signup' exact component={SignUp} />
      <Route path='/signin' exact component={SignIn} />
      <Route path='/recuperar' exact component={Recuperar}/>
      <Route path='/terminos' exact component={Terminos} />
    </div>
  );
}

export default App;
