
const initialMOvieState = []
const movieReducers = (state = initialMOvieState, action) => {
    switch (action.type) {
        case 'MOVIES': {
            return [...state, { ...action.payload }]
        }
        case 'REMOVE': {
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        default: {
            return [...state]
        }
    }
}
export default movieReducers