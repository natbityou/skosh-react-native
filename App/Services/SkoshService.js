import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const apiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function getSkoshTypes(token) {
  return apiClient.get('/skosh-types', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response;
    }

    return null;
  })
}

function skoshSubmit(token, data) {
  console.log(data);

  var formData = new FormData();
    formData.append('type', data.skoshType);
    formData.append('caption', data.caption);
    formData.append('image', { uri: data.skoshPhoto, name: 'userProfile.jpg', type: 'image/jpg' });

  var axoisConfig = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };
  
  return apiClient.post('/skosh', formData, axoisConfig).then((response) => {
      if (in200s(response.status)) {
        console.log("woohoo");
        console.log(response.data);

        return response;
      }
      console.log("boohoo");
      console.log(response.data);

      return null;
  }).catch((error) => {
    if (error.response) {
      console.log(error.response);
    }
    console.log("Error submitting", error);
  });
}


export const skoshService = {
  getSkoshTypes,
  skoshSubmit,
}
