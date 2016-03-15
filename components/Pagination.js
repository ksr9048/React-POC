/**
 * Created by krao on 3/4/2016.
 */

import React, {Component} from 'react'
import '../stylesheet.scss'

class Pagination extends Component {

    goToPrevPage() {
        this.props.goToPrevPage();
    }

    goToNextPage() {
        this.props.goToNextPage();
    }

    render() {
        var pageNo;
        var filterQueries = this.props.currentPage;
        if(this.props.filterProc !== '') {
            pageNo = this.props.currentFilterPageNo;
        } else {
            pageNo = this.props.currentPageNo;
        }

        return (
            <div className="pageDiv">
                <button className="buttonStyle" onClick={this.goToPrevPage.bind(this)} disabled={pageNo === 1}>
                    Prev Page
                </button>
                <label>{pageNo}</label>
                <button onClick={this.goToNextPage.bind(this)} disabled={filterQueries.length < 18}>
                    Next Page
                </button>
            </div>
        )
    }
}

export default Pagination