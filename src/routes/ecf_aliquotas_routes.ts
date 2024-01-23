import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_aliquotas_controller";

class EcfAliquotasRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfaliquotas", verifyToken, Controller.getListEcfAliquotas);

      Routes.get('/ecfaliquotas/:Id', verifyToken, Controller.getEcfAliquotasById);
  
      Routes.post('/ecfaliquotas', verifyToken, Controller.insertEcfAliquotas);

      Routes.put('/ecfaliquotas/:Id', verifyToken, Controller.updateEcfAliquotas);
  
      Routes.delete('/ecfaliquotas/:Id', verifyToken, Controller.deleteEcfAliquotas);
    }
}
  
export default new EcfAliquotasRoute();