import classes from './BlogPosts.module.css';

function BlogPosts(props) {
  console.log(props.post.userId)
  return (
    <ul className={classes.posts}>
      <li>
        {props.post.title}
      </li>
      <li>
        {props.post.body}
      </li>
    </ul>);
}

export default BlogPosts;
