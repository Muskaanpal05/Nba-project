import React, { useState } from 'react';
import NBA_Teams from "./components/nba_teams";
import NBA_Games from "./components/nba_games";
import { Toolbar, Grid, withStyles,Typography, Tabs, Tab, Paper } from '@material-ui/core';

const style = {
  main_title: {
    width: "100%",
    color: "#f16d32",
    textAlign: "center",
    marginTop: "5rem"
  },
  selection: {
    background: "#f16d32",
    color: "white"
  }
};

function App(props) {
  const { classes } = props;
  const [currentTab, setCurrentTab] = useState(0);
  function handellingChange(e, val) {
    setCurrentTab(val);
  }
  return (
    <div className="App">
      <Toolbar>
        <Grid container justify="center" className={classes.main_title}>
          <Typography variant="h3" color="inherit">
            NBA REPO
          </Typography>
        </Grid>
      </Toolbar>
      <Grid container justify="center" spacing={40} style={{marginTop:"5rem"}}>
        <Grid item xs={12} lg={9} md={10}>
          <Paper>
          <Tabs
            value={currentTab}
            onChange={handellingChange}
            variant="fullWidth"
            centered
            style={{ width: "100%" }}
          >
            <Tab label="NBA Teams" classes={{ selected: classes.selection }} />
            <Tab label="NBA Games" classes={{ selected: classes.selection }} />
          </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={9} md={10}>
          {
            currentTab === 0?<NBA_Teams></NBA_Teams>:<NBA_Games></NBA_Games>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(style)(App);
