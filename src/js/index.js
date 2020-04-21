import store from "../js/store/index";
import {addArticle} from "../js/actions/index"

// This is Redux without React

window.store = store;
window.addArticle = addArticle;