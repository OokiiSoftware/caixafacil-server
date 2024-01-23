import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_sintegra_60m_controller";

class EcfSintegra60mRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfsintegra60m", verifyToken, Controller.getListEcfSintegra60m);

      Routes.get('/ecfsintegra60m/:Id', verifyToken, Controller.getEcfSintegra60mById);
  
      Routes.post('/ecfsintegra60m', verifyToken, Controller.insertEcfSintegra60m);

      Routes.put('/ecfsintegra60m/:Id', verifyToken, Controller.updateEcfSintegra60m);
  
      Routes.delete('/ecfsintegra60m/:Id', verifyToken, Controller.deleteEcfSintegra60m);
    }
}
  
export default new EcfSintegra60mRoute();