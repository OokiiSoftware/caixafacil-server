import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ibpt_controller";

class IbptRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ibpt", verifyToken, Controller.getListIbpt);

      Routes.get('/ibpt/:Id', verifyToken, Controller.getIbptById);
  
      Routes.post('/ibpt', verifyToken, Controller.insertIbpt);

      Routes.put('/ibpt/:Id', verifyToken, Controller.updateIbpt);
  
      Routes.delete('/ibpt/:Id', verifyToken, Controller.deleteIbpt);
    }
}
  
export default new IbptRoute();