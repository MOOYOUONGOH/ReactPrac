import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppShell from './AppShell';

import Texts from './Texts';
import Words from './Words';
import Detail from './Detail';

import Church from './Church';
import Calendar from './Calendar';
import Information from './Infomation';
import Home from './GridView';
import Gallary from './Gallary';


class App extends React.Component{
    render() {
        return (
            <AppShell>
                <div>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/Church" Component={Church}/>
                    <Route exact path="/Information" Component={Information}/>
                    <Route exact path="/Calendar" Component={Calendar}/>
                    <Route exact path="/Gallary" Component={Gallary}/>
                </div>
            </AppShell>
        );
    }
}

export default App;
