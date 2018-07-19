import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {AddFlower} from './components/AddFlower'
import {Contact} from './components/Contact'
import {BaseLayout} from './components/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path = '/' component = {App} />
      <Route path = '/addflower' component = {AddFlower} />
      <Route path = '/contact-us' component = {Contact} />
    </Switch>
  </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
