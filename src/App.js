import React, { Component } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { connect } from "react-redux";
import { postUrl } from "./actions";

class App extends Component {
  container = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  title = {
    fontFamily: "sans-serif",
    marginBottom: 60
  };

  form = {
    display: "flex",
    flexDirection: "column"
  };

  button = {
    marginTop: 30
  };

  listItem = {
    cursor: "pointer"
  };

  onClick = () => {
    this.props.postUrl(this.state.localUrl);
  };

  onChangeText = e => {
    this.setState({
      localUrl: e.target.value
    });
  };

  onClickRedirect = shortened_url => {
    window.location = shortened_url;
  };

  render() {
    return (
      <div style={this.container}>
        <h1 style={this.title}>URL Shortener</h1>
        <div style={this.form}>
          <TextField
            placeholder="Enter a valid URL"
            onChange={this.onChangeText}
          />
          <Button style={this.button} onClick={this.onClick}>
            Ok
          </Button>
        </div>
        <List dense>
          {this.props.urls.map(url => (
            <ListItem
              style={this.listItem}
              key={url.id}
              onClick={() => this.onClickRedirect(url.shortened_url)}
            >
              <ListItemText primary={url.shortened_url} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  urls: Object.values(state.urls)
});
const mapDispatchToProps = dispatch => ({
  postUrl: url => dispatch(postUrl(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
