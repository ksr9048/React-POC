/**
 * Created by krao on 2/26/2016.
 */

import React, { Component } from 'react'
import actions from '../redux/actions'
import '../stylesheet.scss'

class QueryList extends Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchQuery());
        setTimeout(function () {
            this.props.toggleShowSpinner();
        }.bind(this), 1500)
    }

    filter(event) {
        this.props.filter(event.target.id);
    }

    toggle(event) {
        this.props.toggle(event.target.id);
    }

    deleteQuery(event) {
        this.props.deleteQuery(event.target.id)
    }

    render() {

        var filterId = this.props.filterProc;
        var filterQueries;
        var buttonName;
        var colorScheme = this.props.colorScheme;

        if(this.props.filterProc !== '') {
            buttonName = "Deselect";
        } else {
            buttonName = "Select";
        }

        filterQueries = this.props.currentPage;

        function myStyle(value, queryId) {
            if(queryId == filterId) {
                return {
                    border: '1px solid black',
                    backgroundColor: 'gold',
                    borderSpacing: '0px',
                    height: '25',
                    fontFamily: 'Sans-serif'
                };
            } else {
                if(colorScheme == 1) {
                    return {
                        border: '1px solid black',
                        backgroundColor: 'rgb(255,' + (255 - Math.floor(value * 255)) + ',' + (255 - Math.floor(value * 255)) + ')',
                        borderSpacing: '0px',
                        height: '25',
                        fontFamily: 'Sans-serif'
                    };
                } else {
                    var colors=['#ffe5e5', '#ffcccc', '#ffb2b2', '#ff9999', '#ff7f7f', '#ff6666', '#ff4c4c', '#ff3232',
                                '#ff1919', '#ff0000', '#e50000'];
                    return {
                        border: '1px solid black',
                        backgroundColor: colors[value],
                        borderSpacing: '0px',
                        height: '25',
                        fontFamily: 'Sans-serif'
                    };
                }
            }
        }

        function timeStyle(time, queryId) {
            var bgColor;

            if(time.substr((time.indexOf('T') + 1), 2) % 2 == 0) {
                bgColor = 'darkturquoise'
            } else {
                bgColor = 'paleturquoise'
            }

            if(queryId == filterId) {
                bgColor = 'gold'
            }

            return {
                border: '1px solid black',
                backgroundColor: bgColor,
                borderSpacing: '0px',
                height: '25',
                fontFamily: 'Sans-serif'
            };
        }

        return (
            <div>
                <table className="tableStyle">
                    <tbody>
                    <tr>
                        <th id="date" className="tableStyle" width="10%" onClick={this.toggle.bind(this)}>Query Date</th>
                        <th id="query" className="tableStyle" width="75%" onClick={this.toggle.bind(this)}>Query with Params</th>
                        <th id="timeInMs" className="tableStyle" width="5%" onClick={this.toggle.bind(this)}>Time in ms</th>
                        <th className="tableStyle" width="5%">Select</th>
                        <th className="tableStyle" width="5%">Delete</th>
                    </tr>
                    {
                        filterQueries.map(function(query) {
                            return (
                                <tr key={query.queryExecutionTimeId}>
                                    <td style={timeStyle(query.date, query.queryExecutionTimeId)} >&nbsp;
                                        {
                                            filterId === '' ? query.date.substr((query.date.indexOf('T') + 1), 8) :
                                                query.date.substr(0, 19).replace('T', ' ')
                                        }
                                    </td>
                                    <td id={query.queryExecutionTimeId} style={myStyle(query.colorValue, query.queryExecutionTimeId)}>
                                        &nbsp;{query.queryWithParams}
                                    </td>
                                    <td style={myStyle(query.colorValue, query.queryExecutionTimeId)}>&nbsp;{query.timeInMs}</td>
                                    <td style={myStyle(query.colorValue, query.queryExecutionTimeId)}>
                                        <button id={query.queryExecutionTimeId} onClick={this.filter.bind(this)}>{buttonName}</button>
                                    </td>
                                    <td style={myStyle(query.colorValue, query.queryExecutionTimeId)}>
                                        <button id={query.queryExecutionTimeId} onClick={this.deleteQuery.bind(this)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }.bind(this))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default QueryList
