import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { GridContainer, TypographyCard } from "./App.styles";

const App: React.FC = () => (
  <Box mx={2}>
    <GridContainer container>
      <GridContainer container>
        <Grid item xs={12} sm={8} md={4}>
          <Box p={1}>
            <TextField id="name" fullWidth label="Name" />
          </Box>
        </Grid>
      </GridContainer>
      <Grid item xs={12}>
        <GridContainer container>
          <Grid item xs={12} sm={8} md={4}>
            <Box p={1}>
              <TextField
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
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={2}>
          <Divider />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={1}>
          <Card>
            <CardContent>
              <TypographyCard>Name: Lorem ipsum dolor sit amet</TypographyCard>
              <TypographyCard>
                Comment: Aliquam ornare vel velit nec tincidunt. Fusce dolor
                ligula, maximus vitae ornare egestas, suscipit sed ligula. Etiam
                vehicula dignissim lectus, in elementum ligula pellentesque sit
                amet.
              </TypographyCard>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </GridContainer>
  </Box>
);

export default App;
