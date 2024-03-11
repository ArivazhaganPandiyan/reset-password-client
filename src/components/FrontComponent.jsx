/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const FrontComponent = ({pgHeading, handleClick, response}) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // handel state
  function handleChange(e){
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 m-auto justify-center items-center px-3 sm:px-5 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-neutral-200 pt-3 pb-5">


      <p className="font-bold text-lg" >
        {pgHeading}
      </p>

      <div className="w-60 sm:w-72">
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[5.8px] border-blue-gray-200 focus:border-gray-900 placeholder-shown:border-blue-950"
            placeholder=" " 
            name="email"
            value={ user.email }
            onChange={(e) => handleChange(e)}
            />
            <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email Address
          </label>
        </div>
      </div> 

      <div className="w-60 sm:w-72">
        <div className="relative w-full min-w-[200px] h-10">
        <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[5.8px] border-blue-gray-200 focus:border-gray-900 placeholder-shown:border-blue-950"
            placeholder=" " 
            name="password"
            value={ user.password }
            onChange={(e) => handleChange(e)}
            />
            <label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
          </label>
        </div>
      </div> 

      { // show error and message
        response.error ? <p className=" text-red-500 text-xs" >{response.error}</p> : 
        response.data ? <p className=" text-green-500 text-xs" >{response.data}</p> : 
        response.message ? <p className=" text-green-500 text-xs" >{response.message} go to the login page</p> : ''
         
      }

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={() => handleClick(user)}
      >
        {pgHeading === 'Login' ? 'Sign In' : 'Sign Up' }
      </button>

      {
        pgHeading === 'Login' ? (
        <button 
        onClick={() => navigate('/forgot')}
        className="text-xs">
          Forgot Password?
        </button>
        ) : ''
      }

      <div className="flex flex-row justify-center items-center text-center w-full">
        <div className="flex-grow h-px bg-gray-400"></div>
        <div className="mx-2 text-sm">OR</div>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>

      <div>
        {
          pgHeading === 'Login' ? (
            <p className="text-sm">Don&apos;t have an account? 
              <button 
              onClick={() => navigate('/register')}
              className="ml-1 text-sky-600 font-semibold">
                Sign up
              </button>
            </p>
          ) : 
          (
            <p className="text-sm">Have an account? 
              <button 
              onClick={() => navigate('/')}
              className="ml-1 text-sky-600 font-semibold">
                Log in
              </button>
            </p>
          )
        }
      </div>

    </div> 
  )
}

export default FrontComponent