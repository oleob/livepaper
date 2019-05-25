import axios from "axios";

const webRequest = {
  get: url => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    });
  }
};

export default webRequest;
