import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [passStatus,setPassStatus] = useState(false);

  return (
    <div className="App">
      
      <input type={passStatus ? 'text' : 'password'} className='textBox'/> 
      <button className='btn' onClick={()=>{setPassStatus(!passStatus)}}>
        {passStatus ? 'Hide' : 'Show'}
      </button>

    </div>
  );
}

export default App;
