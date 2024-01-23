import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_movimento_controller";

class PdvMovimentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvmovimento", verifyToken, Controller.getListPdvMovimento);

      Routes.get('/pdvmovimento/:Id', verifyToken, Controller.getPdvMovimentoById);
  
      Routes.post('/pdvmovimento', verifyToken, Controller.insertPdvMovimento);

      Routes.put('/pdvmovimento/:Id', verifyToken, Controller.updatePdvMovimento);
  
      Routes.delete('/pdvmovimento/:Id', verifyToken, Controller.deletePdvMovimento);
    }
}
  
export default new PdvMovimentoRoute();