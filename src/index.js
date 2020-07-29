import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/Video';
import CadastroCategoria from './pages/cadastro';




ReactDOM.render(
  // Add routes com React-router-dom
  <BrowserRouter>
    <Switch>
      {/* Qaundo add exact, a rota tem que ser exata */}
      <Route path="/" component={Home} exact/> 
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* Remover o path para quando não achar nenhuma rota */}
      <Route component={ ()=> (<div>Pagina 404</div>)} />  
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
