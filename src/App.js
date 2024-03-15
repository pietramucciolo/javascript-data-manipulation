import './App.css';
import { carros } from './utils';

function App() {
  console.log(carros)
  return (
    <div className="App">
      <ul
        class="nav justify-content-center  "
      >
        {
          carros.map((data) => {
            return (
              <div className="item-carro">
                <span>{data.id}</span>
                <span>{data.marca}</span>
                <span>{data.modelo}</span>
                <span>{data.cor}</span>
                <span>{data.combustível}</span>
                <span>{data.portas}</span>
                <span>{data.cambio}</span>
              </div>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
