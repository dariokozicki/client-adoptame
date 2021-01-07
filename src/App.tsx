import './App.css';
import 'primereact/resources/themes/arya-green/theme.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css'
import Layout from './components/Layout/Layout'
import PetView from './containers/pages/PetView/PetView';
import HistoryView from "./containers/pages/HistoryView/HistoryView"
import React from 'react';
import { Router, Route} from 'react-router-dom'
import ProfileView from './containers/pages/ProfileView/ProfileView';

let History = require("history").createBrowserHistory()

function App() {
  return (
    <Router history={History} >
      <Layout>
          <Route exact path="/" component={PetView} />
          <Route path="/history" component={HistoryView}/>
          <Route path="/profile" component={ProfileView} />
      </Layout>
    </Router>
  );
}

export default App;
