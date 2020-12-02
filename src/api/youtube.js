import axios from 'axios';
const KEY = 'AIzaSyB5TSLM8fSFv5GH0bscaTl6Tv9d9Oms_y4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
});
