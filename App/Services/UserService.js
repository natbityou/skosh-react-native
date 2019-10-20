import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
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

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }

  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

function registerUser(data) {
  console.log(data);

  var formData = new FormData();
    formData.append('email', data.email);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('avatar', { uri: data.avatar, name: 'userProfile.jpg', type: 'image/jpg' });

  return userApiClient.post('/register', formData).then((response) => {
    if (in200s(response.status)) {
      console.log("woohoo");
      console.log(response.data);

      return response.data
    }
    console.log("boohoo");
    console.log(response.data);

    return null
  })
  .catch((error) => {
    if (error.response) {
      console.log(error.response);
    }
    console.log("Error registering", error);
  });
}

function loginUser(data) {
  return userApiClient.post('/login', data)
    .then((response) => {
      if (in200s(response.status)) {
        return response;
      }

      return null;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
      }

      console.log("Error Logging In!", error);
    });
}

function testLogin() {

  return userApiClient.get('/testing')
    .then((response) => {
      if (in200s(response.status)) {
        console.log("woohoo");
        console.log(response.data);

        return response.data
      }
      console.log("boohoo");
      console.log(response.data);

      return null
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
      }

      console.log("Failed test login", error);
    });
}


export const userService = {
  fetchUser,
  registerUser,
  loginUser,
  testLogin
}
