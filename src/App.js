import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

import Menu from './components/Menu';
import Thumbnail from './components/Thumbnail';
import Message from './components/Message';
import Favorite from './components/Favorite';
import Notfoundpage from './components/Notfoundpage';

function App() {
  return (
    <>
      <Menu />  
      <Routes>
        <Route path='/' element={ <Thumbnail /> }/>  
        <Route path='/favorite' element={ <Favorite /> }/>  
        <Route path='/message' element={ <Message /> }/>  
        <Route path='*' element={ <Notfoundpage /> }/>  
      </Routes>    
    </>
  );
}

export default App;
