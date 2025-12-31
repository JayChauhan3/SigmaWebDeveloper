import { useState,useEffect } from 'react'
import './App.css'
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  const [posts, setPosts] = useState([])

  // Fetch posts on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err))
  }, [])

  return (
    <>
     <Navbar/>
 <div className='bg-slate-200 min-h-screen'>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map(post => (
            <Card key={post.id} title={post.title} description={post.body} />
          ))}
        </div>
</div>
    </>
  )
}

export default App
