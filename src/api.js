import axios from "axios";
import file from "./data";

var config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/html",
    crossorigin: true,
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7"
  }
};

export default {
  movies(url) {
    return {
      getFetch: () => axios.get(file),
      getAll: () =>
        axios(
          "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs",
          {
            responseType: "text",
            maxContentLength: 200000000000,
            headers: {
              crossorigin: true
            }
          }
        )
    };
  }
};
