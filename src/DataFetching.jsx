import React, { useEffect, useRef, useState } from "react";

const BASE_URL = `https://jsonplaceholder.typicode.com`;

const DataFetching = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const abortControllerRef = useRef(null)

useEffect(()=>{
const fetchPost = async() =>{
  abortControllerRef.current?.abort();
  abortControllerRef.current = new AbortController()

  setLoading(true)
  try{
const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
  signal: abortControllerRef.current?.signal,
})
const data = await response.json()
setPosts(data)
  } catch(err){
    if(err.name === 'AbortError'){
      console.log('Aborted');
      return;
    }
    
      setError(err)
  } finally{
    setLoading(false)
  }
}

fetchPost()
}, [page])

if(error){
  return <h2>Something went wrong, Please try again</h2>
}

  return <div>
   <h1>Data Fetching</h1>
<button onClick={()=>setPage(page + 1)}>Increase page {page}</button>
   
   {loading&& <h2>Please wait...</h2>}
   {!loading &&(
      <ul>
        {posts.map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
  )}
  </div>;
};

export default DataFetching;
