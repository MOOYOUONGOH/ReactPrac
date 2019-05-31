import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Text from './Text';
import Words from './Words';
class App extends React.Component{
    render() {
        return (
        <Router>
            <AppShell>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/texts" component={Text}/>
                    <Route exact path="/words" component={Words}/>
                </div>
            </AppShell>
            </Router>
        );
    }
}

export default App;
