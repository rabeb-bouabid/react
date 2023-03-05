import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div class="container-scroller">
  <Header/>
  <Sidenav/>
  <Home/>
  <Footer/>
    </div>
  );
}

export default App;
