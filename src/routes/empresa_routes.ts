import { Router } from "express";
import { verifyJWT } from "../util/JwToken";
import Controller from "../controller/empresa_controller";

class EmpresaRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/empresa",
        verifyJWT,
        Controller.getListEmpresa
      );
      
      Routes.get(
        '/empresa/:Id',
        verifyJWT,
        Controller.getEmpresaById
      );
  
      Routes.post(
        '/empresa',
        verifyJWT,
        Controller.insertEmpresa
      );

      Routes.put(
        '/empresa/:Id',
        verifyJWT,
        Controller.updateEmpresa
      );
  
      Routes.delete(
        '/empresa/:Id',
        verifyJWT,
        Controller.deleteEmpresa
      );
    }
  }
  
  export default new EmpresaRoute();