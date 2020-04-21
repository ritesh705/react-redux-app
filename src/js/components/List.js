import React from "react";
import {connect} from "react-redux";

const ConnectedList = ({articles}) =>
{
   // React Componennt
      return (<div>
               <ul>
                  {articles.map((article)=><li key={article.id}>{article.title}</li>)}
               </ul>
            </div>);
}

const mapStateToProps = (state) =>
{
   return{articles : state.articles};
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;