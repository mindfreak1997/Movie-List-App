export const movies = (formData) => {
    return {
        type: 'MOVIES',
        payload: formData
    }
}
export const remove = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}