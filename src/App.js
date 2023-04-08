import './App.css';
function App() {
  return (
    <body className='body'>
      <div className='navbar'>
        <Icon/>
        <List />
        <Social/>
      </div>
      <div className='content'>
        <div className='object'>
          
        </div>
      </div>
    </body>
  );
}

function List (){
  return(
    <>
    <ul>
    <li><a>Beranda</a></li>
    <li><a>Game</a></li>
    <li><a>Tentang</a></li>
    <li><a>Laporkan bug</a></li>
    </ul>
    </>
  );
}

function Icon (){
  return(
  <>
    <label className='icon'>SPEBES</label>
  </>
  );
}

function Social(){
  return(
    <>
      <label className='discord'>Discord</label>
    </>
  );
}
export default App;
