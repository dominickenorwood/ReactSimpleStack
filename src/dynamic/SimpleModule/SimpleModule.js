import React, { Component } from 'react';
import classes from './SimpleModule.css';

class SimpleModule extends Component {

    state = {
        value: ''
    }

    render() {
        console.log('[Simple Module Props]', this.props);
        return (
            <div className={ classes.Simple }>Simple Module I work!</div>
        )
    }
}

export default SimpleModule;