import './App.css';
import { Route } from 'react-router-dom'
import Head from './components/Head'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import HandPage from './components/HandPage'
import Recuperar from './components/RecuperarPass'
import Terminos from './components/Terminos'
import Despegando from './components/Despegando'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Route path='/handling' component={Head} />
      <Route path='/handling' exact component={HandPage} />

      <Route path='/register' component={Head} />
      <Route path='/register/signup' exact component={SignUp} />
      <Route path='/register/signin' exact component={SignIn} />
      <Route path='/register/recuperar' exact component={Recuperar}/>
      <Route path='/register/terminos' exact component={Terminos} />

      <Route path='/user' component={NavBar} />
      <Route path='/user/:id' exact component={Despegando} />
    </div>
  );
}

export default App;
