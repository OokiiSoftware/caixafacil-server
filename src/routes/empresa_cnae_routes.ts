import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/empresa_cnae_controller";

class EmpresaCnaeRoute {
    allRoutes(Routes: Router) {
      Routes.get("/empresacnae", verifyToken, Controller.getListEmpresaCnae);

      Routes.get('/empresacnae/:Id', verifyToken, Controller.getEmpresaCnaeById);
  
      Routes.post('/empresacnae', verifyToken, Controller.insertEmpresaCnae);

      Routes.put('/empresacnae/:Id', verifyToken, Controller.updateEmpresaCnae);
  
      Routes.delete('/empresacnae/:Id', verifyToken, Controller.deleteEmpresaCnae);
    }
}
  
export default new EmpresaCnaeRoute();