import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
    todos: [],
    queries: [],
    procQueries: [],
    stats: [],
    queryId: 0,
    filterProc: '',
    sortBy: '',
    sortingOrder: '',
    showSpinner: true,
    currentPage: [],
    currentPageNo: 1,
    currentFilterPageNo: 1,
    pageSize: 18,
    loadColors: false,
    colorScheme: 1,
    statsToggleOrder: ''
}

let store = configureStore(initialState)

render(
    <Provider store={store} >
        <App/>
    </Provider>,
  document.getElementById('app')
)
