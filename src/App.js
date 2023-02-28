import logo from './logo.svg';
import './App.css';
import data from './data/berlin.json';
import IdCard from './components/IdCard';

function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item) => (
        <IdCard cardData={item} key={item.img} />
      ))}
    </div>
  );
}

export default App;
