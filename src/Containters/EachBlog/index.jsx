import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import CommentCounter from "../CommmentCouter/index";

const API = "https://authorwrites-blog-api.herokuapp.com/";

class EachBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        console.log(res);
        console.log(res.data.notes[this.props.index]);
        this.setState({
          blogs: res.data.notes[this.props.index],
          isLoading: false,
        });
        console.log(res);
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  handledelete = () => {
    axios.delete(API + this.state.blogs._id);
  };
  render() {
    return (
      <React.Fragment>
        <div className="card">
          {/*<img
            className="card-img-top"
            src={this.state.blogs.Image}
            alt="Blog pic"
            loading="lazy"
          />*/}
          <div className="card-body my-2">
            <h1>{this.state.blogs.Title}</h1>
            <p>Created on {this.state.blogs.Created}</p>
            <p>Last modified on {this.state.blogs.Updated}</p>
            <a className="btn btn-primary mx-4 my-2">
              {this.state.blogs.Likes} Likes
            </a>
            <CommentCounter cardindex={this.props.index} />
            <a
              className="btn btn-primary mx-4 my-2"
              onClick={this.handledelete}
            >
              Delete
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EachBlog;
