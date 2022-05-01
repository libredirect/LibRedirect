import { safeURL } from "../../util.js";

var autocompletes = [];

function parseURL(urlString) {
    if (urlString)
        try {
            const url = safeURL(urlString);
            if (url.username && url.password)
                return `${url.protocol}//${url.username}:${url.password}@${url.host}`;
            else
                return url.origin;

        } catch (error) {
            console.log(error);
            return "";
        }
    else
        return "";
}

export default {
    autocompletes,
    parseURL,
    autocomplete
}
