import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdEdit, MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
  const todostring = localStorage.getItem("todos");
    return todostring ? JSON.parse(todostring) : [];
  });
  const [showfinished, setshowfinished] = useState(true);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const toggleFinished = (e) => {
    setshowfinished(!showfinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
     

  }
  const handleDelete = (e, id) => {
    // let index= todos.findIndex(item=>{
    //   return item.id === id;
    //  })
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")

  }

  

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
   
  }


  return (
    <>
      <Navbar />
      <div className="mx-3 md:container  md:mx-auto my-5 border rounded-xl p-5 bg-violet-200 min-h-[80vh] md:w-[40%]">
        <h1 className='text-xl font-bold text-center'>iTask - Manage Your Todo at One Place</h1>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold my-2'>Add a Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" name="" id="" className='w-full rounded-full px-2 my-3' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-gray-400 px-4 py-3 text-sm font-bold text-white rounded-full mx-2 my-3'>Save</button>
          </div>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showfinished} className='mb-5' />  Show Finished
        <div className="pt-1 pb-4 w-[90%] mx-auto"><hr /></div>


        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 text-gray-500'>No Todos to display!</div>}
          {todos.map(item => {

            return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex  justify-between my-2 w-full">
              <div className='flex gap-5'>

                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id='' />
                {/* <div className={`${item.isCompleted?"line-through":""} break-words w-full`}>{item.todo}</div> */}
                <div className="max-w-full overflow-hidden">
                  <div className={`${item.isCompleted ? "line-through" : ""} break-all w-full`}>
                    {item.todo}
                  </div>
                </div>

              </div>
              <div className="buttons flex h-full ml-10">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><MdEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><MdDelete /></button>
              </div>

            </div>
          })}
        </div>



      </div>

    </>
  )
}

export default App
