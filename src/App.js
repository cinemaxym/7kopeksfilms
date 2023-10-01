import Header from './components/Header'    //imports Header component
import Works from './components/Works';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import LogoHeader from './components/LogoHeader';
import Player from './components/Player';

function App() {
  return (
    <div className="App bg-black" style={{height: "100vh"}}>
      <Header />
      <Player />
      <LogoHeader />
      
      <Works />
      <Footer />
    </div>
  );
}

export default App;
