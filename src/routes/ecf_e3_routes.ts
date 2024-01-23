import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_e3_controller";

class EcfE3Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfe3", verifyToken, Controller.getListEcfE3);

      Routes.get('/ecfe3/:Id', verifyToken, Controller.getEcfE3ById);
  
      Routes.post('/ecfe3', verifyToken, Controller.insertEcfE3);

      Routes.put('/ecfe3/:Id', verifyToken, Controller.updateEcfE3);
  
      Routes.delete('/ecfe3/:Id', verifyToken, Controller.deleteEcfE3);
    }
}
  
export default new EcfE3Route();