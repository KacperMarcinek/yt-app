import axios from "axios";

const KEY = "AIzaSyA-2Pyuw-Z19cukSZ6z_iMEHALGJMeAIQU";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
