import React from 'react'
import Footer from './Footer'
import TodoList from './TodoList'


function Content({todoList, todoFilter, filterSet, todosSet}) {
    
    
    return (
        <>
        
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<TodoList todos={todoList} todosSet={todosSet} />
		
	</section>
    <Footer todoFilter={todoFilter} filterSet={filterSet} todos={todoList} todosSet={todosSet}/>
    </>
    )
}

export default Content
