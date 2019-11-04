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
  timeout: 5000,
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
  if (!data.skoshType || !data.caption || !data.skoshPhoto){
    console.log("Error submitting");
    return null;
  }

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

function getSkoshAvatars(token, skoshTypeId) {

  return apiClient.get('/skosh-types/' + skoshTypeId + '/skoshes', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      console.log(response);

      return response;
    }
    return null;
  })
}

function getSkoshProfile(token, userId){
  return apiClient.get('/users/' + userId + '/skoshes', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((response) => {
    if (in200s(response.status)) {
      console.log(response);

      return response;
    }
    return null;
  })
}

export const skoshService = {
  getSkoshTypes,
  skoshSubmit,
  getSkoshAvatars,
  getSkoshProfile,

}
