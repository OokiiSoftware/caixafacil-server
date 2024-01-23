import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_suprimento_controller";

class PdvSuprimentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvsuprimento", verifyToken, Controller.getListPdvSuprimento);

      Routes.get('/pdvsuprimento/:Id', verifyToken, Controller.getPdvSuprimentoById);
  
      Routes.post('/pdvsuprimento', verifyToken, Controller.insertPdvSuprimento);

      Routes.put('/pdvsuprimento/:Id', verifyToken, Controller.updatePdvSuprimento);
  
      Routes.delete('/pdvsuprimento/:Id', verifyToken, Controller.deletePdvSuprimento);
    }
}
  
export default new PdvSuprimentoRoute();