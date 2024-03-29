import React, {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../actions/index"

class ConnectedPost extends Component
{
    componentDidMount()
    {
        this.props.getExtData();
    }

    render()
    {
        const remoteArticleItems = this.props.articles.map((el, index)=>
            <li key={el.id}>
               {el.id}-{el.title}
            </li>);
        return(
            <ul>{remoteArticleItems}</ul>
        );
    }
}

function mapStateToProps(state)
{
    console.log(state.remoteArticles);
    return{
        articles : state.remoteArticles.slice(0, 10)
    };
}

function mapDispatchToProps(dispatch)
{
  return{
    getExtData: () => dispatch(getData())
  };
}

const Post = connect(mapStateToProps, mapDispatchToProps)(ConnectedPost);

export default Post;