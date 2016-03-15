/**
 * Created by krao on 3/2/2016.
 */

import React, { Component } from 'react'
import './spinner.scss';

class Spinner extends Component {

    render() {
        let spinnerimg = require('image-webpack!./spinner.svg');

        var imgStyle= {
            zIndex: '10',
            width: window.innerHeight,
            width: '56px',
            height: '56px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-28px',
            marginLeft: '-28px'
        }

        var spinStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'rgba(255,255,255,.8)',
            zIndex: 1000
        }

        return (
            <div style={spinStyle} className="spinner-overlay">
                <div style={imgStyle} className="spinner">
                    <img src={spinnerimg}/>
                </div>
            </div>
        )
    }
}

export default Spinner