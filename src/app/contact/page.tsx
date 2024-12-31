import React from 'react'


const Contact = () => {
  return (
    <div>
      <>
 
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        
        
             <img src="contact.jpeg" height={881} width={805} 
   className="absolute inset-0 h-full " 

 />
    
        
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Create an account
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Inter your details below
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email or Phone Number
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
          />
        </div>
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        </div>
        <button className="text-white bg-red-700
hover:bg-indigo-600 rounded text-lg w-371px h-56px pt-16px" 
    

>
        Create Account
        </button>
     
        <button  className='text-black bg-white h-404px w-371px pt-9'>SingUp with Google </button>
    
        <p className="text-xs text-gray-700 mt-3">
         Alread have an account?  <span><a className='mx-7 underline font-medium text-black' href="/home">Login</a></span>
        </p>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Contact







