function signin() {
    return axios.post('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
        "login": "string1",
        "password": "string2"
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
}



const api = {
    
}

const axios = require('axios').default;

signin().then(function (response){
    console.log(response)
    axios.get('http://dev.trainee.dex-it.ru/api/Team/GetTeams', {
        params: {
            token: response.data.token
        },
        withCredentials: true
    }).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})





  export default api;