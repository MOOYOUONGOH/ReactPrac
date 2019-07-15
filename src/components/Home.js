import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridView from './GridView';
import '../styles/app.css';

class Home extends React.Component{
    render(){
        return (
            <Card>
                <CardContent>
                        <GridView/>
                </CardContent>
            </Card>
        );
    }
}

export default Home;
