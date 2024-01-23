import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_icms_custom_det_controller";

class TributIcmsCustomDetRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributicmscustomdet", verifyToken, Controller.getListTributIcmsCustomDet);

      Routes.get('/tributicmscustomdet/:Id', verifyToken, Controller.getTributIcmsCustomDetById);
  
      Routes.post('/tributicmscustomdet', verifyToken, Controller.insertTributIcmsCustomDet);

      Routes.put('/tributicmscustomdet/:Id', verifyToken, Controller.updateTributIcmsCustomDet);
  
      Routes.delete('/tributicmscustomdet/:Id', verifyToken, Controller.deleteTributIcmsCustomDet);
    }
}
  
export default new TributIcmsCustomDetRoute();