import './App.css';
import Recipe from './main/recipe';

function App() {
  return (
    <div className="App">
      <div className='main'>
       <Recipe/>
      </div>
      <div className='footer'>
        <h2>© ITPrototype</h2>
        <div className='social'>
          <a href="https://instagram.com/mamedov.kemrannn"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/ITPrototype"><i className="fa-brands fa-github"></i></a>
          <a href="https://t.me/DjdgsuTbshsgK12"><i className="fa-brands fa-telegram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
