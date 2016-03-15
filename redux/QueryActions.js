/**
 * Created by krao on 2/29/2016.
 */

import axios from 'axios'
import React, { Component } from 'react'

class QueryActions extends Component {
    async fetchQuery() {
        return dispatch => {
            axios.get(
                `$http://intranet.murgler.org/Queries`)
                .then(function(response) {
                    dispatch({
                        type: 'FETCH_QUERY',
                        queries: response.data
                    });
                });
        }
    }
}

export default QueryActions
//module.exports = (Provider.createActions(QueryActions));