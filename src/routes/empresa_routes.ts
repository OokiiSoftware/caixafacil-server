import { Router } from "express";
import Controller from "../controller/empresa_controller";

class EmpresaRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/empresa",
        // verifyJWT,
        Controller.getAll
      );
    }
  }
  
  export default new EmpresaRoute();