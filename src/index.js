import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Board from './components/Board';
import { observe } from './Game';

observe( knightPosition => 
  ReactDOM.render(
    <Board knightPosition={knightPosition} />, 
    document.getElementById('root')
  )
);

registerServiceWorker();
