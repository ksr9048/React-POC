/**
 * Created by krao on 3/7/2016.
 */

import React, {Component} from 'react'
import '../stylesheet.scss'

class Statistics extends Component {

    toggle(event) {
        this.props.toggle(event.target.id);
    }

    selectProc(event) {
        event.preventDefault();
        var queries = this.props.queries;
        var queryId = queries.reduce(function(queryId, query) {
            if(queryId == null && query.query == event.target.id) {
                queryId = query.queryExecutionTimeId
            }
            return queryId
        }, null);
        this.props.selectProc(queryId)
    }

    render() {

        return (
            <div width="100%">
                <table className="tableStyle" width="100%">
                    <tbody>
                    <tr>
                        <th id="countQuery" className="tableStyle" width="10%" onClick={this.toggle.bind(this)}>Count</th>
                        <th id="query" className="tableStyle" width="70%" onClick={this.toggle.bind(this)}>Query</th>
                        <th id="sumTime" className="tableStyle" width="10%" onClick={this.toggle.bind(this)}>Total Time</th>
                        <th id="avgTime" className="tableStyle" width="10%" onClick={this.toggle.bind(this)}>Average Time</th>
                    </tr>
                    {
                        this.props.stats.map(function(stat) {
                            return (
                                <tr key={stat.query}>
                                    <td>&nbsp;{stat.countQuery}</td>
                                    <td>&nbsp;
                                        <a href="" onClick={this.selectProc.bind(this)} id={stat.query}>{stat.query}</a>
                                    </td>
                                    <td>&nbsp;{stat.sumTime}</td>
                                    <td>&nbsp;{stat.avgTime}</td>
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

export default Statistics