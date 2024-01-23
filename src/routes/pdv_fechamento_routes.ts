import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_fechamento_controller";

class PdvFechamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvfechamento", verifyToken, Controller.getListPdvFechamento);

      Routes.get('/pdvfechamento/:Id', verifyToken, Controller.getPdvFechamentoById);
  
      Routes.post('/pdvfechamento', verifyToken, Controller.insertPdvFechamento);

      Routes.put('/pdvfechamento/:Id', verifyToken, Controller.updatePdvFechamento);
  
      Routes.delete('/pdvfechamento/:Id', verifyToken, Controller.deletePdvFechamento);
    }
}
  
export default new PdvFechamentoRoute();