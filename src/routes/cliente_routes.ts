import { Router } from "express";
import Controller from "../controller/cliente_controller";

class ClienteRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/cliente",
        // verifyJWT,
        Controller.getListCliente
      );

      Routes.get(
        '/cliente/:Id',
        Controller.getClienteById
      );
  
      Routes.post(
        '/cliente',
        Controller.insertCliente
      );

      Routes.put(
        '/cliente/:Id',
        Controller.updateCliente
      );
  
      Routes.delete(
        '/cliente/:Id',
        Controller.deleteCliente
      );
    }
  }
  
  export default new ClienteRoute();