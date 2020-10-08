import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: "275px",
    },
    
    title: {
      fontSize: 14,
      color: "black",
      fontWeight:"bold",
      
    },

    button:{
      color: "white",
      backgroundColor:"orange",
      '&:hover': {
        background: "black",
     },
    },
   
  });
const Blog = (props) => {
    const {id,title,body} = props.post;
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
          {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} size="small"><Link to={`details/${id}`}>Details</Link></Button>
        </CardActions>
      </Card>
        </div>
    )};
       
       
      

export default Blog;                                    