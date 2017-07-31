import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kanban from './Kanban/Kanban';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Kanban />, document.getElementById('root'));
registerServiceWorker();
