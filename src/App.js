import { useState } from 'react';
import { data } from "./data";
import './App.css';

function App() {

  const [flat, setFlat] = useState(0);
  const {id, apartment, description, image, adress, price} = data[flat];
  

  const previousFlat = () => {
    setFlat((flat => {
      flat --;
      if (flat < 0) {
        return data.length - 1;
      }
      return flat;
    }))
  }

  const nextFlat = () => {
    setFlat((flat => {
      flat ++;
      if (flat > data.length - 1) {
        flat = 0;
      }
      return flat;
    }))
  }

  return (
    <div>

      <div className='container'>
        <h1>Магазин квартир:</h1>

      </div>
      <div className='container'>
        <img src={image} width="300px" alt="flat"/>
      </div>
      
      <div className='container'>
        <h2>{id}.  {apartment}</h2>
      </div>

      <div className='container'>
        <h3>{description}</h3>
      </div>
      
      <div className='container'>
        <h2>{adress}</h2>
      </div>

      <div className='container'>
        <h2>{price}</h2>
      </div>
      
      <div className='btn container'>
        <button onClick={previousFlat}>НАЗАД</button>
        <button onClick={nextFlat}>ВПЕРЕД</button>
      </div>
      
    </div>
  );
}

export default App;

