export const Register = ({ handleClick, handleRegistration, handleChange, registeredUser }) => {
  return (
    <div className="App flex justify-center items-center w-full h-full text-white font-semibold bg-gray-500">
      <div className='flex justify-center items-center flex-col bg-gray-700 p-2 w-80 gap-3 rounded-2xl'>
        <h1 className='text-4xl'>Register</h1>
        <form onSubmit={handleRegistration} className='flex justify-center items-center flex-col gap-3'>
          <input
            onChange={handleChange}
            value={registeredUser.username}
            name="username"
            required
            placeholder='username'
            className='text-center h-10 text-gray-900 rounded-2xl'
          />
          <input 
            onChange={handleChange}
            value={registeredUser.password}
            name="password"
            required
            type='password'
            placeholder='password'
            className='text-center h-10 text-gray-900 rounded-2xl'
          />
          <input 
            onChange={handleChange}
            value={registeredUser.repeatPassword}
            name="repeatPassword"
            required
            type='password'
            placeholder='repeat-password'
            className='text-center h-10 text-gray-900 rounded-2xl'
          />
          <button type='submit' className='bg-gray-200 px-10 h-10 text-gray-900 rounded-2xl'>Register</button>
        </form>
        <p className="mt-5">Already have an account?</p>
        <button onClick={handleClick} type='button' className='bg-gray-400 px-10 h-8 text-gray-900 rounded-2xl'>Login</button>
      </div>
    </div>
  );
};
