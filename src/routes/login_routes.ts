import { Router } from "express";
import { updateToken, deleteToken } from "../util/JwToken";
import Controller from "../controller/login_controller";

class LoginRoute {
    allRoutes(Routes: Router) {
        Routes.post('/login', Controller.login);
        Routes.post('/token', updateToken, Controller.login);
        Routes.post('/logout', deleteToken, Controller.logout);
    }
}

export default new LoginRoute();