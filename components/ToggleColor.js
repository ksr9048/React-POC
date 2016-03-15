/**
 * Created by krao on 3/4/2016.
 */

import React, { Component } from 'react'
import actions from '../redux/actions'
import '../stylesheet.scss'

class ToggleColor extends Component {

    toggleColor() {
        this.props.toggleColor();
    }

    render() {
        return (
            <div className="toggleButtonDiv">
                <button className="toggleButtonStyle" onClick={this.toggleColor.bind(this)}>Toggle Color</button>
                <p>
                    {
                        this.props.colorScheme == 1 ? 'Color calibrated according to the maximum value' :
                                                      'Color calibrated according to the time span'
                    }
                </p>
            </div>
        )
    }
}

export default ToggleColor