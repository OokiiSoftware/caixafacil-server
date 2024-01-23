import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_icms_uf_controller";

class TributIcmsUfRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributicmsuf", verifyToken, Controller.getListTributIcmsUf);

      Routes.get('/tributicmsuf/:Id', verifyToken, Controller.getTributIcmsUfById);
  
      Routes.post('/tributicmsuf', verifyToken, Controller.insertTributIcmsUf);

      Routes.put('/tributicmsuf/:Id', verifyToken, Controller.updateTributIcmsUf);
  
      Routes.delete('/tributicmsuf/:Id', verifyToken, Controller.deleteTributIcmsUf);
    }
}
  
export default new TributIcmsUfRoute();