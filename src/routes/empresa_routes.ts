import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/empresa_controller";

class EmpresaRoute {
    allRoutes(Routes: Router) {
      Routes.get(
        "/empresa",
        verifyToken,
        Controller.getListEmpresa
      );
      
      Routes.get(
        '/empresa/:Id',
        verifyToken,
        Controller.getEmpresaById
      );
  
      Routes.post(
        '/empresa',
        verifyToken,
        Controller.insertEmpresa
      );

      Routes.put(
        '/empresa/:Id',
        verifyToken,
        Controller.updateEmpresa
      );
  
      Routes.delete(
        '/empresa/:Id',
        verifyToken,
        Controller.deleteEmpresa
      );
    }
  }
  
  export default new EmpresaRoute();