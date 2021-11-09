import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';



function App() {
  const [todos, setTodos] = useState([
    {
    title: "deneme",
    id: "123",
    completed: false
},
])
const [filter, setFilter] = useState("all")
const [filteredList, setFilteredList] = useState([])

useEffect(() => {
  if(filter === "all"){
    setFilteredList(todos)
  } else if (filter === "active"){
    const newFiltered = todos.filter((item => {
      return item.completed === false
    }))
    setFilteredList(newFiltered)
  } else if (filter === "completed"){
    const newFiltered = todos.filter((item => {
      return item.completed === true
    }))
    setFilteredList(newFiltered)
  }
},[filter, todos])


  return (
    <section className="todoapp">
    <Header todoSet={setTodos} todoValues={todos} />
  <Content todoList={filteredList} todosSet={setTodos} todoFilter={filter} filterSet={setFilter}/>
  </section>
);
}

export default App;
