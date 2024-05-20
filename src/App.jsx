import './App.css';
import Pokemon from"./Pokemon.jsx";

function App() {
  return (
  <>
    <div id='onetofive'>
      <div id='one' className='pokemon'><Pokemon /></div>
      <div id='two' className='pokemon'></div>
      <div id='three' className='pokemon'></div>
      <div id='four' className='pokemon'></div>
      <div id='five' className='pokemon'></div>
    </div>
  </>
  )
}

export default App
