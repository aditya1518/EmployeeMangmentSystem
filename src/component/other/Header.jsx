import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  const userName = !props.data ? 'Admin' : props.data.firstName;

  return (
    <header className="w-full mb-6">
  <div className="flex flex-row items-end justify-between gap-4">
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight">
        Hello
        <br />
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold">{userName} 👋</span>
      </h1>
    </div>

    <div className="flex items-center gap-3">
      <button
        onClick={logOutUser}
        className="bg-red-600 m-[20px] text-sm sm:text-base font-medium text-white px-3 py-2 rounded-sm hover:cursor-pointer hover:bg-emerald-600"
      >
        Logout
      </button>
    </div>
  </div>
</header>

  );
};

export default Header;
