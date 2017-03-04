import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import DonorList from './components/DonorList';
import RegisterDonor from './components/RegisterDonor';
import NestedAbout from './components/aboutnestedroute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import Nav from './components/nav.js';
// import ReactRouter from 'react-router';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/login" component={Login}></Route>
               
                <Route path="/home" component={Home}>
                 <Route path="DonorList" component={DonorList}></Route>
                <Route path="aboutnested" component={NestedAbout}></Route>
                <Route path="RegisterDonor" component={RegisterDonor}></Route>
                 </Route>
                <Route path="/" component={App}>
                    <IndexRoute component={SignUp} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
