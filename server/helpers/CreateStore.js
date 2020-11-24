import { store } from "../../config";

const getUrl = () => {
    const apiUrl = process.env.API_URL;
    if (apiUrl.indexOf("http://") > -1 || apiUrl.indexOf("https://") > -1) {
        return process.env.API_URL;
    }
    return `http://${process.env.API_URL}`;
};

export default (req) => store({}, process.env.NODE_ENV, req.headers.cookie, getUrl());
