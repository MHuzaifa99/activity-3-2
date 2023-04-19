import { useEffect, useState } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component

  const [posts, setPost] = useState([])
  const [isWait, setIsWait] = useState(false)

  useEffect(() => {
    setIsWait(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json()
      })
      .then((posts) => {
        setPost(posts.slice(0, 2))
        setIsWait(false)
        console.log(posts.slice(0, 2))
      })
  }, [])


  return (
    <>
      <NewPost setPost={setPost} posts={posts} isWait={isWait} setIsWait={setIsWait}/>
      {
        posts.map(post => <BlogPosts post={post} />)
      }
    </>
  );
}

export default App;
