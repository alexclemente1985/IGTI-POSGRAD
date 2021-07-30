import React from 'react';
import './App.scss';
import LottieCarousel from './components/LottieCarousel';

function App() {

  return (
     <div className="main">
       <div className="header">
          <h1 className="title">Trabalho Prático de Arquitetura Javascript</h1>
          <p className="author">Alexandre C. Pinheiro</p>
          <p className="description">Libraries utilizadas: <i>react-lottie</i> &amp; <i>react-slick</i></p>
       </div>
      <LottieCarousel/>
    </div>
  );
}

export default App;
