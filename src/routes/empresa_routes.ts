import { Router } from "express";
import Controller from "../controller/empresa_controller";

class EmpresaRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/empresa",
        // verifyJWT,
        Controller.getListEmpresa
      );
      
      Routes.get(
        '/empresa/:Id',
        Controller.getEmpresaById
      );
  
      Routes.post(
        '/empresa',
        Controller.insertEmpresa
      );

      Routes.put(
        '/empresa/:Id',
        Controller.updateEmpresa
      );
  
      Routes.delete(
        '/empresa/:Id',
        Controller.deleteEmpresa
      );
    }
  }
  
  export default new EmpresaRoute();