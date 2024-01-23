import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/contas_receber_controller";

class ContasReceberRoute {
    allRoutes(Routes: Router) {
      Routes.get("/contasreceber", verifyToken, Controller.getListContasReceber);

      Routes.get('/contasreceber/:Id', verifyToken, Controller.getContasReceberById);
  
      Routes.post('/contasreceber', verifyToken, Controller.insertContasReceber);

      Routes.put('/contasreceber/:Id', verifyToken, Controller.updateContasReceber);
  
      Routes.delete('/contasreceber/:Id', verifyToken, Controller.deleteContasReceber);
    }
}
  
export default new ContasReceberRoute();