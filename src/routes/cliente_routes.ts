import { Router } from "express";
import { verifyJWT } from "../util/JwToken";
import Controller from "../controller/cliente_controller";

class ClienteRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/cliente",
        verifyJWT,
        Controller.getListCliente
      );

      Routes.get(
        '/cliente/:Id',
        verifyJWT,
        Controller.getClienteById
      );
  
      Routes.post(
        '/cliente',
        verifyJWT,
        Controller.insertCliente
      );

      Routes.put(
        '/cliente/:Id',
        verifyJWT,
        Controller.updateCliente
      );
  
      Routes.delete(
        '/cliente/:Id',
        verifyJWT,
        Controller.deleteCliente
      );
    }
  }
  
  export default new ClienteRoute();