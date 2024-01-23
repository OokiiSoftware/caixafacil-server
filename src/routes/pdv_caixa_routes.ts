import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_caixa_controller";

class PdvCaixaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvcaixa", verifyToken, Controller.getListPdvCaixa);

      Routes.get('/pdvcaixa/:Id', verifyToken, Controller.getPdvCaixaById);
  
      Routes.post('/pdvcaixa', verifyToken, Controller.insertPdvCaixa);

      Routes.put('/pdvcaixa/:Id', verifyToken, Controller.updatePdvCaixa);
  
      Routes.delete('/pdvcaixa/:Id', verifyToken, Controller.deletePdvCaixa);
    }
}
  
export default new PdvCaixaRoute();