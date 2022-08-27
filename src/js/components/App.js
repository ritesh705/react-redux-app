import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";

const App = () => (
    <div>
        <div>
            <h2>Mapping Required Store Data With React Component</h2>
            <p><b>Articles</b></p>
            <List/>
        </div>
        <div>
            <h2>Mapping Required Action With React Component</h2>
            <p><b>Add New Article</b></p>
            <Form/>
        </div>
        <div>
            <h2>Mapping Required Store & Action With React Component</h2>
            <p><b>Data From External Service Using Redux Thunk (Middleware)</b></p>
            <Post/>
        </div>
    </div>
);

export default App;