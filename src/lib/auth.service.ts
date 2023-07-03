import axios from "axios";

const API_URL = "http://localhost:8765/api/v1/";

export interface RegisterUser {
  nomeUsuario: string;
  emailUsuario: string;
  senhaHash: string;
  telefoneCelular: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "usuario", {
        username,
        password
      })
      .then(response => {
        debugger
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }


  
  register(data: RegisterUser) {
    return axios.post(API_URL + "usuario", data);
  }

  getLivros() {
    return axios.post(API_URL + "livro/all");
  }

  getAnuncios(nomeUsuario: string, emailUsuario: string, senhaHash: string,telefoneCelular: string,  bairro: string,  cidade: string, estado: string,dataCriacao: string) {

    return axios.post(API_URL + "anuncios/all");
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
