import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/contas_pagar_controller";

class ContasPagarRoute {
    allRoutes(Routes: Router) {
      Routes.get("/contaspagar", verifyToken, Controller.getListContasPagar);

      Routes.get('/contaspagar/:Id', verifyToken, Controller.getContasPagarById);
  
      Routes.post('/contaspagar', verifyToken, Controller.insertContasPagar);

      Routes.put('/contaspagar/:Id', verifyToken, Controller.updateContasPagar);
  
      Routes.delete('/contaspagar/:Id', verifyToken, Controller.deleteContasPagar);
    }
}
  
export default new ContasPagarRoute();