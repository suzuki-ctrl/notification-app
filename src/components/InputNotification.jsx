import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const InputNotification = ({  addTodos , setAddTodos , disabled }) => {

    const setTimehours = [...Array(24)].map((u,i) => i);
    const setTimeminitus = [...Array(60)].map((u,i) => i);
    const [hour , setHour] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [todoText , setTodoText] = useState('');

    const onclickAdd = () => {
        if(todoText === "") return;
        const newTodos = [...addTodos, {hour , minutes , todoText} ];
        setAddTodos(newTodos);
        setTodoText("");
        setHour(0);
        setMinutes(0);
      }



  return (
    <div>
      <h3 className='
      text-lg 
      font-bold 
      my-2
      sm:text-2xl
      sm:my-5
      '>
        通知時刻を入力してください！
      </h3>
    <select className='
    cursor-pointer
    bg-red-300
    outline-none
    rounded-3xl
    text-lg
    py-3
    px-5
    font-semibold
    mr-3
    sm:text-xl
    '
        value={hour} 
        onChange={(e) => setHour(parseInt(e.target.value))}
    >
      {setTimehours.map((_hour) => <option value={_hour} key={uuidv4()}>{`${_hour}時`}</option>)}
    </select>
    <select className='
    cursor-pointer
    bg-red-300
    outline-none
    rounded-3xl
    text-lg
    py-3
    px-5
    font-semibold
    ml-3
    sm:text-xl
    '
        value={minutes} 
        onChange={(e) => setMinutes(parseInt(e.target.value))}
     >
      {setTimeminitus.map((_minutes) => <option key={uuidv4()} value={_minutes}>{`${_minutes}分`}</option>)}
    </select>
    <br />
    <input className='
    mt-3
    mb-3
    border-red-300
    border-solid
    border-2
    rounded-3xl
    outline-none
    cursor-pointer
    py-4
    px-16
    text-xl
    sm:text-4xl
    sm:mt-6
    sm:mb-6
    '
       disabled={disabled}
       placeholder='やる事を入力してください！'
       type="text" 
       value={todoText} 
       onChange={(e) => setTodoText(e.target.value)}  
       />
    <br />
    <button className='
    bg-red-300
    rounded-full
    p-4
    text-white
    text-lg
    duration-300
    outline-none
    hover:scale-110
    hover:text-black
    sm:text-xl
    sm:p-6
    '
      disabled={disabled}
      onClick={onclickAdd}>
        追加
    </button>
    </div>
  )
}

export default InputNotification;