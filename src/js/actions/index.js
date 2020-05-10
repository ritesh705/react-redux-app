import {ADD_ARTICLE} from "../constants/action-types";
import {DATA_LOADED} from "../constants/action-types"

export function addArticle(payload)
{
    return{
        type: ADD_ARTICLE, payload
    }
};

export function getData()
{
    return function(dispatch)
    {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response =>
                {
                    if(response.status>=200 && response.status<=299)
                    {
                        return  response.json();
                    }
                    else
                    {
                        throw Error(response.status);
                    }
               })
            .then(responseJson =>
                {
                console.log("JSON "+responseJson);
                dispatch({type: DATA_LOADED, payload: responseJson});
                })
            .catch(error =>
                {
                    console.log("Error occurred."+error);
                    const errorCode = String(error);
                    const errorMessage = String(error);
                    dispatch({type: DATA_LOADED, payload:  {
                        "id": errorCode,
                        "title": errorMessage
                       }});
                })
    };
};