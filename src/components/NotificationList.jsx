
const NotificationList = ({onClickDelete, addTodos}) => {

    const sortedTodos = addTodos.sort((a, b) => {
        const timeA = a.hour * 60 + a.minutes;
        const timeB = b.hour * 60 + b.minutes;
        return timeA - timeB;
      });

  return (
    <div className="
    bg-blue-300
    h-1/2
    pt-4
    sm:h-2/5
    ">
      {sortedTodos.map((todo, index) => (
        <div className="
        flex
        items-center
        justify-center
        text-lg
        mb-2
        px-2
        bg-white
        py-2
        mx-auto
        rounded-2xl
        w-4/5
        flex-col
        sm:w-3/5
        sm:mb-4
        sm:pl-10
        sm:text-2xl
        sm:justify-start
        sm:flex-row
        "
        key={todo.todoText}>
          <h3 className="
          sm:mr-10
          "
          >{todo.hour}時 : {todo.minutes}分 {todo.todoText}</h3>
        <button className="
   bg-red-300
   rounded-full
   p-3
   text-white
   text-lg
   duration-300
   outline-none
   hover:scale-110
        "
            onClick={() => onClickDelete(index)}>削除</button>
        </div>
      ))}
    </div>
  )
}

export default NotificationList;