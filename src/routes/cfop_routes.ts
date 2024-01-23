import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/cfop_controller";

class CfopRoute {
    allRoutes(Routes: Router) {
      Routes.get("/cfop", verifyToken, Controller.getListCfop);
      Routes.get('/cfop/:Id', verifyToken, Controller.getCfopById);

      Routes.post('/cfop', verifyToken, Controller.insertCfop);
      Routes.put('/cfop/:Id', verifyToken, Controller.updateCfop);
      
      Routes.delete('/cfop/:Id', verifyToken, Controller.deleteCfop);
    }
}
  
export default new CfopRoute();