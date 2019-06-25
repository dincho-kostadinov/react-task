import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';


const key = "uJYvnuyLNJt7h9JlBX7k9xsoHybCE2gF";
const FETCH_ARTICLES_URL = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${key}`


/**
 * ROOT SAGA
 */
export default function* rootSaga() {
    yield all([
        watchFetchArticles()
    ]);
}

/**
 * FETCH ALL ARTICLES
 */
function* watchFetchArticles() {
    yield takeLatest(
        actions.FETCH_ARTICLES,
        workerFetchArticles
    );
}

function fetchArticles() {
    return axios({
        method: "GET",
        url: FETCH_ARTICLES_URL
    });
}

function* workerFetchArticles() {
    try {
        const response = yield call(fetchArticles);
        yield put({ 
            type: actions.FETCH_ARTICLES_SUCCESS,
            payload: response
        });
    } catch (error) {
        yield put({
           
            payload: error
        });
    }
}

