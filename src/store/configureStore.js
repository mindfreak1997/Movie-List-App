import { createStore, combineReducers } from 'redux'
import movieReducers from '../reducers/movieReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        movie: movieReducers
    }))
    return store
}
export default configureStore