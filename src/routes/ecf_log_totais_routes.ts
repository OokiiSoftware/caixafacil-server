import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_log_totais_controller";

class EcfLogTotaisRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecflogtotais", verifyToken, Controller.getListEcfLogTotais);

      Routes.get('/ecflogtotais/:Id', verifyToken, Controller.getEcfLogTotaisById);
  
      Routes.post('/ecflogtotais', verifyToken, Controller.insertEcfLogTotais);

      Routes.put('/ecflogtotais/:Id', verifyToken, Controller.updateEcfLogTotais);
  
      Routes.delete('/ecflogtotais/:Id', verifyToken, Controller.deleteEcfLogTotais);
    }
}
  
export default new EcfLogTotaisRoute();