import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  character: `${API}/character`,
  location: `${API}/location`,
  episode: `${API}/episode`
}

export {
  urls
};
