
import React, { use } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('');
  // if (!data) {
  //   setUsername('Admin');
  // }else{
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');

  }
  return (
    <>
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hello <br /> <span className=' text-3xl font-semibold'>Aditya 👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-l font-medium text-white px-4 py-2 rounded-sm hover:cursor-pointer hover:bg-emerald-600'>Logout</button>
      </div>
      </>
  )
}

export default Header

