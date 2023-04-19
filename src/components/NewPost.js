import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({ setPost, posts, isWait, setIsWait }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredBody, setEnteredBody] = useState('')

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function updateBodyHandler(event) {
    setEnteredBody(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    if (!enteredBody || !enteredTitle) {
      alert("Please entered the required fields")
      return
    }
    event.preventDefault();
    const value = {
      userId: 2,
      id: posts.length,
      title: enteredTitle,
      body: enteredBody
    }
    setIsWait(true)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(value)
    }).then(Response => Response.json()).then(post => {
      setPost([...posts, post])
      setIsWait(false)
    })
    setEnteredTitle('')
    setEnteredBody('')
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
        <label>Body</label>
        <input type="text" onChange={updateBodyHandler} value={enteredBody} />
      </div>
      <button>{!isWait ? "Save" : "Saving..."}</button>
    </form>
  );
}

export default NewPost;
