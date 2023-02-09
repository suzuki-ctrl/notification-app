import { useState , useEffect , useCallback } from "react";

import './App.css';
import Header from './components/Header';
import InputNotification from './components/InputNotification';
import NotificationList from './components/NotificationList';

function App() {


  const [addTodos , setAddTodos] = useState([]);

  const checkTodo = useCallback(() => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    addTodos.forEach((todo, index) => {
      if ( todo.hour === currentHours && todo.minutes === currentMinutes ) {
         window.alert(todo.todoText);
         onClickDelete(index);
      }
    });
  }, [addTodos]);

  useEffect(() => {
    const intervalId = setInterval(checkTodo, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [checkTodo]);

  const onClickDelete = (index) => {
    const newTodos = [...addTodos];
    newTodos.splice(index, 1);
    setAddTodos(newTodos)
  }

  return (
    <>
    <div className="w-full h-screen text-center">
      <div className="h-1/2 sm:h-3/5 ">
        <Header />
        <InputNotification addTodos={addTodos} setAddTodos={setAddTodos} disabled={addTodos.length >= 3} />
        {addTodos.length >= 3 && (<p className="text-red-600">登録できるリストは３個までです。</p>)}
      </div>
        <NotificationList addTodos={addTodos} onClickDelete={onClickDelete}/>
    </div>
    </>
  );
}

export default App;
