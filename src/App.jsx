import { CirclePlus } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import List from './components/list';
import './App.css'

function App() {
  let [tasksdouble, setTasksdouble] = useState([]);
  let [showAlert,setShowAlert] = useState(false);

  useEffect(() => {
    if(showAlert){
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  
  let SaveTask = (e) => {
    e.preventDefault();
    let task = e.target.task.value.trim();
    if (!task) {
      e.target.task.value = "";
      return;
    }
    if(!tasksdouble.includes(task)){
      let final = [...tasksdouble, task];
      setTasksdouble(final);
    }
    else{
      setShowAlert(true);
    }
    e.target.task.value = "";
  }
    let deleteTask = (index) => {
      setTasksdouble(prev => prev.filter((_, i) => i !== index));
    }

  return (
    <>
      <div className='flex justify-center mt-5'>
        <h1 className='font-marchise text-4xl'>TO-DO List</h1> 
      </div>
      <div className='flex justify-center m-5'>
        <form className='flex gap-2' onSubmit={SaveTask}>
          <input className='border-2 border-solid border-black rounded-[15px_50px_30px] focus:border-blue-600 focus:outline-solid md:w-2xl w-70 pl-3' type="text" name='task' placeholder='Add a new task' autoComplete="off"/> <button className='bg-green-600 px-4 py-2 rounded-[15px_50px_30px] cursor-pointer flex gap-2' type='submit'>Add <CirclePlus /></button>
        </form>
      </div>
      {showAlert && (
        <div className="flex justify-center -mt-2 mb-3">
          <div className="bg-[#FF637D] text-black px-4 py-2 rounded-md relative overflow-hidden md:w-[40vw] w-[80vw]">
            Task already exists!
            <div className="alert-progress"></div>
          </div>
        </div>
      )}
      <div className="bg-gray-200 md:w-4xl w-90 h-auto mx-auto mt-10 rounded-3xl p-2 flex flex-col gap-2">
        <List item={tasksdouble} onDelete={deleteTask} />           
      </div>
    </>
  )
  }
export default App
