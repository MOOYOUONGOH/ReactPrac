import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';
import Church from './Church';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/texts" component={Texts} />
                        <Route exact path="/words" component={Words} />
                        <Route exact path="/about" component={Church} />
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;

