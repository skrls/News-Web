import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://cdn3.vectorstock.com/i/thumb-large/03/22/monkey-pointing-and-looking-vector-14010322.jpg" class="w-12 h-12 text-white bg-pink-500 rounded-full" alt="Kiwi standing on oval" />
    {/* class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" */}
      <span class="ml-2 text-xl">NewsMonkey</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/science"} class="mr-5 hover:text-gray-900">Science</Link>
      <Link to={'/business'} class="mr-5 hover:text-gray-900">Bussiness</Link>
      <Link to={'/sports'} class="mr-5 hover:text-gray-900">Sports</Link>
      <Link to={'/technology'} class="mr-5 hover:text-gray-900">Technology</Link>
    </nav>
 
  </div>
</header>
  )
}

export default Navbar