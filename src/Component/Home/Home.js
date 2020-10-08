import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then (data => setPost(data))
      },[])
    return (
        <div>
       
        <Grid container spacing={3}>
        
        {
            
            post.map( pd=>{
              return(
                <Grid item xs={3} >
                <Blog key={pd.id} post={pd}/>
                </Grid>
              )
            })
            
          } 
        
        </Grid>

       
        </div>
    );
};

export default Home;