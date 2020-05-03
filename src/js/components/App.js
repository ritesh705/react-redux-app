import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";

const App = () => (
    <div>
        <div>
        <h2>Articles</h2>
        <List/>
        </div>
        <div>
            <h2>Add New Article</h2>
            <Form/>
        </div>
        <div>
            <h2>API Post</h2>
            <Post/>
        </div>
    </div>
);

export default App;