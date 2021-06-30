  
import './App.scss';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main/Main';
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;