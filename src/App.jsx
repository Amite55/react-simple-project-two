
import { useState } from 'react'
import './App.css'
import Cart from './Components/Courses/Cart'
import Courses from './Components/Courses/Courses'
export const totalCredit = 15;
function App() {
  const [cart, setCart] = useState([]);

  const handleBtnClick = (course) =>{
    const credits = cart.reduce((p,c)=> p+c.credit, 0);
    if(totalCredit < credits+course.credit){
     return alert(`please ${totalCredit} don't up`)
    }
    const allReadyExit = cart.find(c => c.id == course.id);
    if(!allReadyExit){
      const newCart = [...cart, course];
      setCart(newCart)
    }
    else{
      alert('This cart all ready exit')
    }
  }
  return (
    <>
      
      <div className='p-4 my-6'>
      <h1 className='text-4xl text-center font-bold text-primary'>Course Registion</h1>
      </div>

      <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-9'>
               <Courses handleBtnClick={handleBtnClick}></Courses>
            </div>

            <div className='col-span-3'>
              <Cart cart={cart}></Cart>
            </div>
      </div>

    </>
  )
}

export default App
