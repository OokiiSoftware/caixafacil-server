import { Router } from "express";
import Controller from "../controller/login_controller";

class LoginRoute {
    allRoutes(Routes: Router) {
        Routes.post('/login', Controller.login);
    }
}

export default new LoginRoute();