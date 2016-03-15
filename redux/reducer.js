/**
 * Created by krao on 2/26/2016.
 */

var reducer = function(state, action) {
    switch (action.type) {
        /*case 'FETCH_QUERY':
            return Object.assign({}, state, {
                queries: action.queries,
                stats: action.stats,
                currentPage: action.queries.slice(0, state.pageSize),
                currentPageNo: 1,
                loadColors: action.loadColors
            });
        case 'FETCH_PROCQUERY':
            return Object.assign({}, state, {
                procQueries: action.procQueries,
                currentPage: action.procQueries.slice(0, state.pageSize),
                currentFilterPageNo: 1,
                loadColors: true
            });
        case 'DELETE_QUERY':
            return Object.assign({}, state, {
                queryId: action.queryId,
                procQueries: action.procQueries,
                queries: action.queries,
                currentPage: action.currentPage
            });
        case 'SET_FILTER':
            return Object.assign({}, state, {
                filterProc: action.procId,
                currentPage: action.currentPage,
                loadColors: true
            });
        case 'SORT_QUERY':
            return Object.assign({}, state, {
                queries: action.queries,
                procQueries: action.procQueries,
                currentPage: action.currentPage,
                currentPageNo: action.currentPageNo,
                currentFilterPageNo: action.currentFilterPageNo,
                sortingOrder: action.sortingOrder
            });
        case 'TOGGLE_SPINNER':
            return Object.assign({}, state, {
                showSpinner: action.showSpinner
            });
        case 'NEXT_PAGE':
            return Object.assign({}, state, {
                currentPage: action.currentPage,
                currentPageNo: action.currentPageNo,
                currentFilterPageNo: action.currentFilterPageNo
            });
        case 'PREV_PAGE':
            return Object.assign({}, state, {
                currentPage: action.currentPage,
                currentPageNo: action.currentPageNo,
                currentFilterPageNo: action.currentFilterPageNo
            });
        case 'SET_COLOR':
            return Object.assign({}, state, {
                queries: action.queries,
                procQueries: action.procQueries,
                loadColors: false
            })
        case 'TOGGLE_COLOR':
            return Object.assign({}, state, {
                colorScheme: action.colorScheme,
                loadColors: true
            });
        case 'SORT_STATS':
            return Object.assign({}, state, {
                stats: action.stats,
                statsToggleOrder: action.statsToggleOrder
            });*/
        default:
            return state;
    }
}

export default reducer
