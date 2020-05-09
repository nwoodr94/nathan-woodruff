import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: "Nathan Woodruff - Developer",
  description: "I'm a full stack software developer in React/Node and Python with AWS",
  meta: {
    name: {
      keywords: 'nathan, woodruff, software, developer'
    }
  }
};

// async function initializeReactGA() {
//   await ReactGA.initialize('UA-154613054-2');
//   await ReactGA.pageview(window.location.pathname + window.location.search);
// }

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// initializeReactGA();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
