/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import './App.css'
import Home from "./pages/Home/Home"
import Carrinho from "./pages/Carrinho/Carrinho"
import Jogos from "./pages/Jogos/Jogos";
import Game from "./pages/Game/Game";
import Entrar from "./pages/Entrar/Entrar";
import ListadeDesejos from "./pages/ListadeDesejos/ListadeDesejos";

function App({theme}) {
  return (
    <div data-theme={theme} id="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/carrinho' element={<Carrinho/>}/>
          <Route exact path='/jogos' element={<Jogos/>}/>
          <Route path='/jogos/:id' element={<Game/>}/>
          <Route path='/entrar' element={<Entrar/>}/>
          <Route path='/lista-de-desejos' element={<ListadeDesejos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
App.propTypes = {
  theme: PropTypes.string.isRequired,
};
const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(App);
