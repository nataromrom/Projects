import logo from './logo.svg';
import './App.css';
import data from './data.json';
import PriceCard from './components/PriceCard';

function App() {
  return (
    <div className="App">

{
        data.map((card) =>
            <PriceCard
                key ={card.tarifprise}
                tarifprise={card.tarifprise}
                speed={card.speed}
                isPressed ={card.isPressed}>
            </PriceCard>
        )
}

    </div>
  );
}

export default App;
