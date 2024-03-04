import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            college:'MKCE',
            Department:'AIDS'
        }
    }
ChangeDept = () => {
    this.setState({Department:'AIML'})
}
    

     render() {
        return (
            <div>
                <h4>College Name:{this.state.college}</h4>
                <h4>Department Name:{this.state.Department}</h4>
                <button onClick={this.ChangeDept} > Change Department</button>
            </div>
        );
    }
}

HomeClass.propTypes = {

};

export default HomeClass;