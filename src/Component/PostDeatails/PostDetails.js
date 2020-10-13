import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles({
  title:{
    fontSize: 24,
    color: 'black',
    fontWeight: 'bolder',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  }
})


const PostDetails = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [like, setLike] = useState();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  },[]);

  const handel = ()=>{
    const color = like? ' ' : 'primary';
     setLike(color);
  }

  return (
    <div className="container">
      <hr/>
      
      <p className={classes.title}>Title: {post.title}</p>
      <p>
        <b>Post:</b> {post.body}
      </p>
      <ThumbUpAltIcon onClick={handel} color={like}/>
      <hr />
     
     {
       
        <Comment id={post.id}/>
        
     }
    
    </div>
  );
};

export default PostDetails;
