import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_impressora_controller";

class EcfImpressoraRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfimpressora", verifyToken, Controller.getListEcfImpressora);

      Routes.get('/ecfimpressora/:Id', verifyToken, Controller.getEcfImpressoraById);
  
      Routes.post('/ecfimpressora', verifyToken, Controller.insertEcfImpressora);

      Routes.put('/ecfimpressora/:Id', verifyToken, Controller.updateEcfImpressora);
  
      Routes.delete('/ecfimpressora/:Id', verifyToken, Controller.deleteEcfImpressora);
    }
}
  
export default new EcfImpressoraRoute();