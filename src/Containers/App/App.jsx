import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props);
        return <div>
            <h1>Hello App</h1>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    task: state
})
export default connect(mapStateToProps)(App);