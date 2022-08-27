import {ADD_ARTICLE, DATA_LOADED} from "../constants/action-types";

const initialState =
{
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action)
{
    if(action.type === ADD_ARTICLE)
    {
        state = Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    }

    if(action.type === DATA_LOADED)
    {
        state = Object.assign({}, state, {remoteArticles: state.remoteArticles.concat(action.payload)});
    }
    return state;
};

export default rootReducer;