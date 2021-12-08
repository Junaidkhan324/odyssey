// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Sram from './components/Sram';
import Brakes from './components/Brakes';
import loader from '../src/assets/particles.gif';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
        <div className="pageLoader">
          <img src={loader} alt=""/>
        </div>
        <Banner/>
        <Sram/>
        <Brakes/>
      </div>
    </div>
  );
}

export default App;

