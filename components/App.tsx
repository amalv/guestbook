import React from 'react';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { GridContainer, PaperStyled } from "./App.styles";

const App = () => (
  <GridContainer container>
    <Grid item xs={12}>
      <Box p={1}>
        <PaperStyled>xs=12</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box p={1}>
        <PaperStyled>xs=12</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box p={1}>
        <PaperStyled>xs=12</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Box p={2}>
        <Divider />
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box p={1}>
        <PaperStyled>xs=12 sm=6</PaperStyled>
      </Box>
    </Grid>
    </GridContainer>
  );

export default App;