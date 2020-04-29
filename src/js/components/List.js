import React from "react";
import {connect} from "react-redux";

// React Component
const ConnectedList = ({articles}) =>
{
   const articleItems = articles.map((article, index) =>
         <li key={index}>
            {article.title}
         </li>
   );
   return (<div>
            <ul>{articleItems}</ul>
         </div>);
}

const mapStateToProps = (state) =>
{
   return{articles : state.articles};
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;