import axios from "axios";
import Cookies from "js-cookie";
//  async function save() {
// 	let data = textToData(elemData.innerHTML);
// 	// console.log(data)

// 	let formData = new FormData();

// 	formData.append('file', ../data/${getFileName()});
// 	formData.append('content', data);

// 	/*for ( let key in json ) {
// 		formData.append(key, json[key]);
// 	}*/

// 	let response = await fetch(${SERVER}/api/save.php, {
// 		method: 'POST',
// 		headers: {
// 			// 'Content-Type': 'application/json;charset=utf-8'
// 		},
// 		body: formData
// 	});

// 	if (response.ok) { // если HTTP-статус в диапазоне 200-299
// 		// получаем тело ответа (см. про этот метод ниже)
// 		let json = await response.text();

// 		// console.warn('text', json);

// 		fixScroll();

// 		return json;
// 	} else {
// 		alert("Ошибка HTTP: " + response.status);
// 	}
// }
let baseURL = "http://dev.trainee.dex-it.ru/api";
const axiosInstance = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("token");
    console.log(Cookies.get("token"), "cookies");
    // console.log(JSON.parse(localStorage.auth))
    // const authToken = JSON.parse(localStorage.auth).token.catch((e) => console.log(e))
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const api = {
  async registration(data) {
    // console.log(data);
    // return axiosInstance.post("Auth/SignUp", data);
    let response = await fetch(`${baseURL}/Auth/SignUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(data),
    });
    let result = await response.json();
    return { data: result };
  },
  async login(data) {
    let formData = new FormData();
    let response = await fetch(`${baseURL}/Auth/SignIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  },
  team: {
    delete(id) {
      return axiosInstance.delete(`Team/Delete?id=${id}`, id)
    },
    async add(data) {
      // return axiosInstance.post("Team/Add", data);
      let response = await fetch(`${baseURL}/Team/Add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      return { data: result };
    },
    async upDateTeam(data) {
      // return axiosInstance.put("Team/Update", data);
      let response = await fetch(`${baseURL}/Team/Update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      return { data: result };
    },
    async getTeams(data) {
      // return axiosInstance.get(
      //   `Team/GetTeams?Page=${data.page}&PageSize=${data.pageSize}`
      // );
      let response = await fetch(
        `${baseURL}/Team/GetTeams?Page=${data.page}&PageSize=${data.pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      let result = await response.json();
      return { data: result };
    },
    async getTeam(data) {
      // return axiosInstance.get(`Team/Get?id=${data.id}`);
      let response = await fetch(`${baseURL}/Team/Get?id=${data.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      let result = await response.json();
      return { data: result };
    },
  },
  player: {
    delete(id) {
      return axiosInstance.delete(`Player/Delete?id=${id}`, id)
    },
    async add(data) {
      //   return axiosInstance.post("Player/Add", data);
      let response = await fetch(`${baseURL}/Player/Add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      return { data: result };
    },
    async getPositions() {
      // return axiosInstance.get("Player/GetPositions");
      let response = await fetch(`${baseURL}/Player/GetPositions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      let result = await response.json();
      return { data: result };
    },

    async getPlayers(data) {
      let response = await fetch(
        `${baseURL}/Player/GetPlayers?TeamIds=${data.teamIds
          .map((id) => id)
          .join("&&TeamIds=")}&Page=${data.page}&PageSize=${data.pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      let result = await response.json();
      return { data: result };
    },

    async upDate(data) {
      // return axiosInstance.put("Player/Update", data);
      let response = await fetch(`${baseURL}/Player/Update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      return { data: result };
    },

    async get(data) {
      // console.log(data);
      // return axiosInstance.get(`Player/Get?id=${data.id}`);
      let response = await fetch(`${baseURL}/Player/Get?id=${data.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      let result = await response.json();
      return { data: result };
    },
  },

  async saveImage(data) {
    let response = await fetch(`${baseURL}/Image/SaveImage`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: data,
    });
    let result = await response.json();
    return { data: result };
  },
};

export default api;
