import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import HomePage from './components/HomePage';
import Bicicletas from './components/pages/bicicletas/index'
import Seguros from './components/pages/seguros';
import Contato from './components/pages/contato';
import ScrollToTop from './components/ScrollToTop';


function App() {

  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const closee = () => {
    setIsOpen(false)
  }

  return (
    <Router>
      <ScrollToTop/>
      <Navbar isOpen={isOpen} toggle={toggle} closee={closee}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
 
      <Switch>

        <Route exact path='/'>
          <HomePage/>  
        </Route>

        <Route path='/bicicletas'>
          <Bicicletas/>
        </Route>

        <Route path='/seguros'>
          <Seguros/>
        </Route>

        <Route path='/contato'>
          <Contato/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
