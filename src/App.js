import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListArticleComponent from './components/ListArticleComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateArticleComponent from './components/CreateArticleComponent';
import UpdateArticleComponent from './components/UpdateArticleComponent';
import ViewArticleComponent from './components/ViewArticleComponent';

function App() {
    return (
        <div>
          <Router>
            <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListArticleComponent}></Route>
                <Route path = "/articles" component = {ListArticleComponent}></Route>
                <Route path = "/add-article/:id" component = {CreateArticleComponent}></Route>
                <Route path = "/view-article/:id" component = {ViewArticleComponent}></Route>
                <Route path = "/update-article/:id" component = {UpdateArticleComponent}></Route>
              </Switch>
            </div>
            <FooterComponent />
          </Router>
        </div>

    );
}

export default App;