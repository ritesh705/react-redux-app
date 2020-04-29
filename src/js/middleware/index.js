import {ADD_ARTICLE} from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware(store)
{
    return function(next)
    {
        return function(action)
        {
            if(action.type === ADD_ARTICLE)
            {
                const title = action.payload.title;
                const wordsFound = forbiddenWords.filter(word => title.includes(word));
                if(wordsFound.length > 0)
                {
                    console.log("Found Forbidden Word");
                    return store.dispatch({type: "Found Forbidden Word"});
                }
            }
            return next(action);
        }
    }
}