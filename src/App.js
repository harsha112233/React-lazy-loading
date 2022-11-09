import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback, Suspense } from 'react'
import axios from 'axios'
// import Post from './Post';
const Post = React.lazy(() => import('./Post'))
function App() {
  const [list, setList] = useState([])
  const [count, setCount] = useState(1)



  const fetchImages = async () => {
    // let data = await axios.get(`https://api.unsplash.com/photos/random?client_id=y6w1_vY4DcqZDJ6HZ6GZLiA5Cm4bJfrh6rTAf8Vy_EA&limit=10`)
    let data = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${count}&_limit=10`)
    setList([...list, ...data.data])
    console.log("data",data.data)
  }

  useEffect(() => {
    fetchImages()
  }, [count]);


  const scrollEffect = useCallback(() => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollTop,clientHeight,scrollHeight)
    if (scrollTop + clientHeight == scrollHeight) {
      setCount(count => count + 5)
      console.log(count)
    }
  }
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect);
    // return () => {
    //   window.removeEventListener('scroll', scrollEffect)
    // }
  }, [count])


  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        <Post lists={list} />
      </Suspense>
    </div>
  );
}

export default App;
