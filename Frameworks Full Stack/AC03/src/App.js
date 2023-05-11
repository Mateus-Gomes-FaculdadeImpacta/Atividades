import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';


export default function App() {
   return (
       <>
     <header>
     <p><Link to='/home'>Home</Link></p>
     <p> <Link to='/sobre/aula'>Sobre</Link></p>
      <Link to='/usuario'>Usuario</Link>
     </header>
     <main>
         <Switch>
           <Route path='/usuario' component= {Usuario}/>
           <Route path='/sobre/:id?' component= {Sobre}/>
           <Route path='/home' component= {Home}/>
         </Switch>
       </main></>
   );
}
