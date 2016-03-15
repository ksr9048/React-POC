/**
 * Created by krao on 2/26/2016.
 */

import axios from 'axios'
import sortBy from 'sort-by'
var http = require('http')

let actions = {
    /*fetchQuery: function() {
        return dispatch => {
            axios.get(
                'http://intranet.murgler.org/Queries')
                .then(function(response) {
                    dispatch({
                        type: 'FETCH_QUERY',
                        queries: response.data.listQueries,
                        stats: response.data.listQueryStatistics,
                        loadColors: true
                    });
                });
        }
    },
    fetchProcQuery: function(queryId) {
        return dispatch => {
            axios.get(
                `http://intranet.murgler.org/ProcedureQueries/${queryId}`)
                .then(function(response) {
                    console.log(response)
                    dispatch({
                        type: 'FETCH_PROCQUERY',
                        procQueries: response.data
                    });
                });
        }
    },
    deleteQuery: function(queryId, queries, procQueries, currentPageNo, currentFilterPageNo, pageSize, filterProc) {
        var newProcQueries = procQueries.reduce(function(newList, query) {
                    if(query.queryExecutionTimeId != queryId) {
                        newList.push(query);
                    }
                    return newList;
        }, []);

        var newQueries = queries.reduce(function(newList, query) {
            if(query.queryExecutionTimeId != queryId) {
                newList.push(query);
            }
            return newList;
        }, []);

        var currentPage = filterProc === '' ?
            newQueries.slice((currentPageNo - 1) * pageSize, currentPageNo * pageSize)
                : newProcQueries.slice((currentFilterPageNo - 1) * pageSize, currentFilterPageNo * pageSize);

        return dispatch => {
            axios.delete(
                `http://intranet.murgler.org/DeleteQuery/${queryId}`)
                .then(function(response) {
                    console.log(response)
                    dispatch({
                        type: 'DELETE_QUERY',
                        queryId: response.data,
                        queries: newQueries,
                        procQueries: newProcQueries,
                        currentPage: currentPage
                    });
                });
        }
    },
    setFilter: function(executionId, queries, currentPageNo, pageSize, currentPage) {
        if(executionId == '') {
            currentPage = queries.slice((currentPageNo - 1) * pageSize, currentPageNo * pageSize)
        }

        return {
            type: 'SET_FILTER',
            procId: executionId,
            currentPage: currentPage
        }
    },
    sort: function(sortColumn, sortingOrder, queries, procQueries, currentPageNo, currentFilterPageNo, pageSize, filterProc) {
        var newQueries, newProcQueries, currentPage, currentPageNum, currentFilterPageNum;

        if(filterProc !== '') {
            if(sortingOrder === 'asc') {
                newProcQueries = procQueries.sort(sortBy(sortColumn));
            } else {
                newProcQueries = procQueries.sort(sortBy(sortColumn)).reverse()
            }
            currentPage = newProcQueries.slice(0, pageSize);
            currentFilterPageNum = 1;
            newQueries = queries;
            currentPageNum = currentPageNo;
        } else {
            if(sortingOrder === 'asc') {
                newQueries = queries.sort(sortBy(sortColumn));
            } else {
                newQueries = queries.sort(sortBy(sortColumn)).reverse()
            }
            currentPage = newQueries.slice(0, pageSize)
            currentPageNum = 1;
            newProcQueries = procQueries;
            currentFilterPageNum = currentFilterPageNo;
        }

        return {
            type: 'SORT_QUERY',
            sortBy: sortBy,
            sortingOrder: sortingOrder,
            queries: newQueries,
            procQueries: newProcQueries,
            currentPage: currentPage,
            currentPageNo: currentPageNum,
            currentFilterPageNo: currentFilterPageNum
        }
    },
    toggleShowSpinner: function(spinnerValue) {
        return {
            type: 'TOGGLE_SPINNER',
            showSpinner: spinnerValue
        }
    },
    goToNextPage: function(queries, procQueries, currentPageNo, currentFilterPageNo, pageSize, filterProc) {
        var currentPage, currentPageNum, currentFilterPageNum;

        if(filterProc !== '') {
                currentPage = procQueries.slice(currentFilterPageNo * pageSize, (currentFilterPageNo + 1)* pageSize),
                currentFilterPageNum = currentFilterPageNo + 1,
                currentPageNum = currentPageNo
        } else {
                currentPage = queries.slice(currentPageNo * pageSize, (currentPageNo + 1)* pageSize),
                currentPageNum = currentPageNo + 1,
                currentFilterPageNum = currentFilterPageNo
        }

        return {
            type: 'NEXT_PAGE',
            currentPage: currentPage,
            currentPageNo: currentPageNum,
            currentFilterPageNo: currentFilterPageNum
        }
    },
    goToPrevPage: function(queries, procQueries, currentPageNo, currentFilterPageNo, pageSize, filterProc) {
        var currentPage, currentPageNum, currentFilterPageNum;

        if(filterProc !== '') {
            currentPage = procQueries.slice((currentFilterPageNo - 2) * pageSize, (currentFilterPageNo - 1) * pageSize),
            currentFilterPageNum = currentFilterPageNo - 1,
            currentPageNum = currentPageNo
        } else {
            currentPage = queries.slice((currentPageNo - 2) * pageSize, (currentPageNo - 1) * pageSize),
            currentPageNum = currentPageNo - 1,
            currentFilterPageNum = currentFilterPageNo
        }

        return {
            type: 'PREV_PAGE',
            currentPage: currentPage,
            currentPageNo: currentPageNum,
            currentFilterPageNo: currentFilterPageNum
        }
    },
    setColor: function(queries, procQueries) {
        return {
            type: 'SET_COLOR',
            queries: queries,
            procQueries: procQueries
        }
    },
    toggleColor: function(colorScheme) {
        if(colorScheme == 1) {
            colorScheme = 2
        } else {
            colorScheme = 1
        }
        return {
            type: 'TOGGLE_COLOR',
            colorScheme: colorScheme
        }
    },
    sortStats: function(sortColumn, sortingOrder, stats) {
        var sortedStats;
        if(sortingOrder === 'asc') {
            sortedStats = stats.sort(sortBy(sortColumn));
        } else {
            sortedStats = stats.sort(sortBy(sortColumn)).reverse()
        }
        return {
            type: 'SORT_STATS',
            stats: sortedStats,
            statsToggleOrder: sortingOrder
        }
    }*/
}

export default actions
