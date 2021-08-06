import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love dog" },
    { id: 2, title: "I love cat" },
    { id: 3, title: "I love tiger" },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like :''
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit= 10 & _page = 2
        const paramsString = queryString.stringify(filters);
        console.log(paramsString);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log( responseJSON.data );

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fail", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("newPage", newPage);
    setFilter({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // từ vị trí index xóa đi 1 phần tử
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValue) {
    console.log("Form Submit", formValue);

    // add newTodo to current todoList
    // newTodo là giá trị ta lấy từ Todoform(form Value)
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log("NewFIlters ", newFilters);
    setFilter({
      ...filters,
      _page : 1,
      title_like : newFilters.searchTerm,
    })
  }
  const [showClock,setShowClock] = useState(true)

  return (
    <div className="App">
      {/* <h1> React hook Todo-List</h1> */}
      <h1> React hook Post-List</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
        <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
        */}
      <PostFilterForm onSubmit={handleFiltersChange}></PostFilterForm>
      <PostList posts={postList}></PostList>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
      {showClock && <Clock></Clock>}
      <button onClick={() => setShowClock(false) }>Hide Clock</button>
    </div>
  );
}

export default App;
