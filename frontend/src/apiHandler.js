const axios = require('axios')
// for fetching todo list from backend 

const apiUrl = 'http://localhost:3002/todos'

const createTodo = async (title) => {
    try {
        // a function to get the post method from backend 
    
        const { data : newTodo } = await axios.post(apiUrl, {
            title, 
            // taking title 
        })
    
        return newTodo
    } catch (error) {
        console.log(`error while creating todo`, error);
        throw error
        
    }
}


const deleteTodo = async (id) => {
    try {
        // get the delete method 
        const message = await axios.delete(`${apiUrl}/${id}`) 
        // have to give id as parameter so that delete can happen in backend 
        return message
    } catch (error) {
        console.log(`error while deleting todo`, error);
        throw error
        
    }
} 

// update => put => write everything under trycatch 

const updateTodo = async(id, payload) => {
// id => todo id and payload => contains the things that is going to update => truck full of needed items 
    try {
        const {data : newTodo} = await axios.put(`${apiUrl}$/{id}`, payload)
        // data props and rename it newTodo 
        // payload contains data like {completed : true}
        return newTodo
    } catch (error) {
        console.log(`error in updating data`, error);
        throw error
        
    }
}


// its time to get all the todo => get request 

const getAllTodo = async () => {
    try {
        const {data : newTodo} = await axios.get(apiUrl)
        return newTodo
    } catch (error) {
        console.log(`error while get request`, error);
        throw error
        
    }
}


export default { createTodo, deleteTodo, updateTodo, getAllTodo}