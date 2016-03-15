import React, { Component } from 'react'
import QueryList from './QueryList'
import Spinner from './Spinner'
import ToggleColor from './ToggleColor'
import Pagination from './Pagination'
import Statistics from './Statistics'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import sortBy from 'sort-by'


class App extends Component {

  filter(executionId) {
      if(this.props.filterProc === '') {
          this.props.dispatch(actions.setFilter(executionId, this.props.queries, this.props.currentPageNo, this.props.pageSize, this.props.currentPage))
          this.props.dispatch(actions.fetchProcQuery(executionId))
      } else {
          this.props.dispatch(actions.setFilter('', this.props.queries, this.props.currentPageNo, this.props.pageSize, this.props.currentPage))
      }
  }

  selectProc(queryId) {
      this.props.dispatch(actions.setFilter(queryId, this.props.queries, this.props.currentPageNo, this.props.pageSize, this.props.currentPage))
      this.props.dispatch(actions.fetchProcQuery(queryId))
  }

  toggle(sortBy) {
      if(this.props.sortingOrder === 'asc') {
          this.props.dispatch(actions.sort(sortBy, 'desc', this.props.queries, this.props.procQueries, this.props.currentPageNo,
              this.props.currentFilterPageNo, this.props.pageSize, this.props.filterProc))
      } else {
          this.props.dispatch(actions.sort(sortBy, 'asc', this.props.queries, this.props.procQueries, this.props.currentPageNo,
              this.props.currentFilterPageNo, this.props.pageSize, this.props.filterProc))
      }
  }

  toggleStats(sortBy) {
      if(this.props.statsToggleOrder === 'asc') {
          this.props.dispatch(actions.sortStats(sortBy, 'desc', this.props.stats))
      } else {
          this.props.dispatch(actions.sortStats(sortBy, 'asc', this.props.stats))
      }
  }

  toggleShowSpinner() {
      if(this.props.showSpinner) {
          this.props.dispatch(actions.toggleShowSpinner(false))
      } else {
          this.props.dispatch(actions.toggleShowSpinner(true))
      }
  }

  deleteQuery(queryId) {
      this.props.dispatch(actions.deleteQuery(queryId, this.props.queries, this.props.procQueries, this.props.currentPageNo,
                                    this.props.currentFilterPageNo, this.props.pageSize, this.props.filterProc))
  }

  goToPrevPage() {
      this.props.dispatch(actions.goToPrevPage(this.props.queries, this.props.procQueries, this.props.currentPageNo,
          this.props.currentFilterPageNo, this.props.pageSize, this.props.filterProc))
  }

  goToNextPage() {
      this.props.dispatch(actions.goToNextPage(this.props.queries, this.props.procQueries, this.props.currentPageNo,
          this.props.currentFilterPageNo, this.props.pageSize, this.props.filterProc))
  }

  toggleColor() {
        this.props.dispatch(actions.toggleColor(this.props.colorScheme))
  }

  componentDidUpdate() {
      if (this.props.loadColors) {
          if (this.props.colorScheme == 1) {
              if (this.props.filterProc == '') {
                  var maxTime, newQueries;
                  maxTime = this.props.queries.reduce(function (maxValue, query) {
                      return Math.max(query.timeInMs, maxValue)
                  }, 0);
                  newQueries = this.props.queries.map(function (query) {
                      query.colorValue = query.timeInMs / maxTime;
                      return query;
                  });
                  this.props.dispatch(actions.setColor(newQueries, this.props.procQueries));
              } else {
                      var maxTime, newProcQueries;
                      maxTime = this.props.procQueries.reduce(function (maxValue, query) {
                          return Math.max(query.timeInMs, maxValue)
                      }, 0);
                      newProcQueries = this.props.procQueries.map(function (query) {
                          query.colorValue = query.timeInMs / maxTime;
                          return query;
                      });
                      this.props.dispatch(actions.setColor(this.props.queries, newProcQueries));
              }
          } else {
              if (this.props.filterProc == '') {

                      var newQueries;
                      newQueries = this.props.queries.map(function (query) {
                          query.colorValue = Math.floor(query.timeInMs / 1000);
                          if (query.colorValue > 10) {
                              query.colorValue = 10;
                          }
                          return query;
                      }.bind(this));
                      this.props.dispatch(actions.setColor(newQueries, this.props.procQueries));

              } else {

                      var newProcQueries;
                      newProcQueries = this.props.procQueries.map(function (query) {
                          query.colorValue = Math.floor(query.timeInMs / 1000);
                          if (query.colorValue > 10) {
                              query.colorValue = 10;
                          }
                          return query;
                      });
                      this.props.dispatch(actions.setColor(this.props.queries, newProcQueries));

              }
          }
      }
  }

  render() {

    var showSpinner = this.props.showSpinner;
    return (
      <div>
        <h1>Slow performing queries</h1>
      </div>
    )
  }

}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(App)

/*<ToggleColor toggleColor={this.toggleColor.bind(this)} colorScheme={this.props.colorScheme}/>

<QueryList queries={this.props.queries} dispatch={this.props.dispatch} procQueries={this.props.procQueries}
queryId={this.props.queryId} filterProc={this.props.filterProc} currentPage={this.props.currentPage}
filter={this.filter.bind(this)} toggle={this.toggle.bind(this)} colorScheme={this.props.colorScheme}
toggleShowSpinner={this.toggleShowSpinner.bind(this)} deleteQuery={this.deleteQuery.bind(this)} />

<Pagination filterProc={this.props.filterProc} currentPage={this.props.currentPage}
currentFilterPageNo={this.props.currentFilterPageNo} currentPageNo={this.props.currentPageNo}
goToPrevPage={this.goToPrevPage.bind(this)} goToNextPage={this.goToNextPage.bind(this)}/>

<Statistics stats={this.props.stats} toggle={this.toggleStats.bind(this)} selectProc={this.selectProc.bind(this)}
queries={this.props.queries} />

{ showSpinner && <Spinner /> }*/
