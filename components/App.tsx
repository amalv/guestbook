import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { NextPage, GetStaticProps } from "next";
import { GridContainer, TypographyCard } from "./App.styles";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import {
  createComment,
  updateComment,
  deleteComment,
} from "../src/graphql/mutations";
import { listComments } from "../src/graphql/queries";
API.configure(awsconfig);

type ItemProps = {
  id?: string;
  name: string;
  comment: string;
};

type Props = {
  initialComments?: Array<ItemProps>;
};
const initialState = { name: "", comment: "" };

const App: React.FC<Props> = ({ initialComments }: Props) => {
  const [formState, setFormState] = useState(initialState);
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    console.log("COMMENTS IN USE EFFECT:!", comments);
    fetchComments();
  }, []);
  //const todo = { name: "John Doe", comment: "My first comment!" };
  /* create a comment */
  //  API.graphql(graphqlOperation(createComment, { input: todo }));
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function fetchComments() {
    try {
      const commentsData: any = await API.graphql(
        graphqlOperation(listComments)
      );
      const commentsUpdated: any = commentsData.data.listComments.items;
      console.log("FETCHING COMMENTS!", commentsUpdated);
      setComments(commentsUpdated);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addComment() {
    try {
      console.log("FORM STATE: ", formState);
      if (!formState.name || !formState.comment) return;
      const comment = { ...formState };
      setComments([...comments, comment]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createComment, { input: comment }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  return (
    <Box mx={2}>
      <GridContainer container>
        <GridContainer container>
          <Grid item xs={12} sm={8} md={4}>
            <Box p={1}>
              <TextField
                onChange={(event) => setInput("name", event.target.value)}
                id="name"
                fullWidth
                label="Name"
              />
            </Box>
          </Grid>
        </GridContainer>
        <Grid item xs={12}>
          <GridContainer container>
            <Grid item xs={12} sm={8} md={4}>
              <Box p={1}>
                <TextField
                  onChange={(event) => setInput("comment", event.target.value)}
                  id="comment"
                  fullWidth
                  multiline
                  rows={4}
                  label="Comment"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item>
          <Box p={1}>
            <Button onClick={addComment} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <Divider />
          </Box>
        </Grid>
        {comments.map((comment, index) => (
          <Grid
            key={comment.id ? comment.id : index}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Box p={1}>
              <Card>
                <CardContent>
                  <TypographyCard>Name: {comment.name}</TypographyCard>
                  <TypographyCard>Comment: {comment.comment} </TypographyCard>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </GridContainer>
    </Box>
  );
};
/*</Box>
          <div key={comment.id ? comment.id : index}>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
          </div>
          */

export default App;
