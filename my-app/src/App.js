import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import DisplayTodoBoard from "./components/DisplayTodoBoard";
import CreateBook from './components/CreateBook';
import CreateTodo from './components/CreateTodo';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';
import { getAllTodos, createTodo } from './services/TodoService';
import TodoTable from './components/TodoTable';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [todoList, setTodoList] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleBookSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks + 1);
      });
  
  }

  const handleTodoSubmit = () => {
      createTodo(todoList)
        .then(() => {
          setNumberTodos(numberOfTodos + 1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        console.log(data)
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        console.log(data)
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleBookOnChangeForm = (e) => {
      let inputBookData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputBookData);
  }

  const handleTodoOnChangeForm = (e) => {
      let inputTodoData = todoList;
      if (e.target.name === 'todo') {
        todoList.todo = e.target.value;
      } else if (e.target.name === 'category') {
        todoList.category = e.target.value;
      } else if (e.target.name === 'complete') {
        todoList.isComplete = e.target.value;
      }
      setTodoList(inputTodoData);
  }

  
  return (
    <div className="main-wrapper">
      <div className="main book">
        <Header />
        <CreateBook 
          // bookShelf={bookShelf}
          handleBookOnChangeForm={handleBookOnChangeForm}
          handleBookSubmit={handleBookSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
        />
        <BookTable books={books} />
        <Footer />
      </div>
      <div className="main todo">
        <Header />
        <CreateTodo 
          // todoList={todoList}
          handleTodoOnChangeForm={handleTodoOnChangeForm}
          handleTodoSubmit={handleTodoSubmit}
        />
        <DisplayTodoBoard
          numberOfTodos={numberOfTodos} 
          getAllTodo={getAllTodo} 
        />
        <TodoTable todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
