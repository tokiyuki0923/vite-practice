import './App.css';
import Pokemon from"./Pokemon.jsx";

function App() {
  return (
  <>
    <div className ='header'>
      <div className='logo'><h2>ポケモン図鑑</h2></div>
    </div>
    <div id='onetofive'>
      <div id='one' className='pokemon'><Pokemon /></div>
      <div id='two' className='pokemon'><Pokemon /></div>
      <div id='three' className='pokemon'><Pokemon /></div>
      <div id='four' className='pokemon'></div>
      <div id='five' className='pokemon'></div>
    </div>
  </>
  )
}

export default App
