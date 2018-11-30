import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Fira Sans', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Space Mono', 'monospace']
})

typography.injectStyles()

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
