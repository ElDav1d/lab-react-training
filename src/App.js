import logo from './logo.svg';
import './App.css';
import data from './data/berlin.json';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';

function App() {
  return (
    <>
      <div className="App">
        {/* {data.map((item) => (
          <IdCard cardData={item} key={item.img} />
        ))}
        <div>
          <h1>GREETINGS</h1>
          <Greetings language={'de'}>
            <span>Ludwig</span>
          </Greetings>
          <Greetings language={'es'}>
            <span>Pepito</span>
          </Greetings>
          <Greetings language={'en'}>
            <span>Anne</span>
          </Greetings>
          <Greetings language={'fr'}>
            <span>Françoise</span>
          </Greetings>
        </div> */}
        {/* <LikeButton /> */}
        <Dice />
      </div>
    </>
  );
}

export default App;
