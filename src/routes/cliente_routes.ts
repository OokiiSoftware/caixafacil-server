import { Router } from "express";
import Controller from "../controller/cliente_controller";

class ClienteRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/cliente",
        // verifyJWT,
        Controller.getAll
      );

      Routes.get(
        '/cliente/:Id',
        Controller.getById
      );
  
      Routes.post(
        '/cliente',
        Controller.insert
      );

      Routes.put(
        '/cliente/:Id',
        Controller.update
      );
  
      Routes.delete(
        '/cliente/:Id',
        Controller.delete
      );
  
    //   Routes.put(
    //     "/api/update-companion",
    //     verifyJWT,
    //     Controller.updateCompanion
    //   );
    //   Routes.post(
    //     "/api/remove-companion-associted-patient",
    //     verifyJWT,
    //     Controller.removeCompanionAssocitedPatient
    //   );
    }
  }
  
  export default new ClienteRoute();