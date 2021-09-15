import './App.css';
import { useState } from 'react'
import Home from './route/Home/Home';
import Game from './route/Game/Game'

const App = () => {
  const [page, setPage] = useState('home');

  const handleChangePage = (page) => {
    setPage(page);
  }

  switch (page) {
    case "home":
      return <Home handleChangePage={handleChangePage} />
    case "game":
      return <Game handleChangePage={handleChangePage} />
    default:
      return <Home />
  }

}

export default App;
