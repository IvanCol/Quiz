import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import {Route, Switch} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={'/auth'} component={Auth}/>
          <Route path={'/quiz-creator'} component={QuizCreator}/>
          <Route path={'/quiz/:id'} component={Quiz}/>
          <Route path={'/'} component={QuizList}/>
        </Switch>
      </Layout>
    );
  }
}
