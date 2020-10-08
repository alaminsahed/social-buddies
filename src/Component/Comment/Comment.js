import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  email:{
    color: "blue",
  },
  head:{
      fontSize: 24,
      fontWeight:'bold',
      textAlign: 'center',
  }
});

const Comment = (props) => {
  const classes = useStyles();
  console.log(props);
  const [comment, setComment] = useState([]);
  const { id } = props;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  });

  return (
    <div>
    <h1 className={classes.head}>Comments</h1>
    <Grid container spacing={3}>
      {comment.map((comment) => {
        return (
          
            <Grid item sm={6}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="black"
                    gutterBottom
                  >
                    <b>Name:</b>{comment.name}
                  </Typography>
                  <Typography className={classes.email}> <b style={{color:"black"}}>Email:</b>{comment.email}</Typography>
                  <Typography variant="body2" component="p">
                    <b> Comment:</b>{comment.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          
        );
      })}
      </Grid>
    </div>
  );
};

export default Comment;
