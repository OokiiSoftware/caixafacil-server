import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_ii_controller";

class NfeDetalheImpostoIiRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostoii", verifyToken, Controller.getListNfeDetalheImpostoIi);

      Routes.get('/nfedetalheimpostoii/:Id', verifyToken, Controller.getNfeDetalheImpostoIiById);
  
      Routes.post('/nfedetalheimpostoii', verifyToken, Controller.insertNfeDetalheImpostoIi);

      Routes.put('/nfedetalheimpostoii/:Id', verifyToken, Controller.updateNfeDetalheImpostoIi);
  
      Routes.delete('/nfedetalheimpostoii/:Id', verifyToken, Controller.deleteNfeDetalheImpostoIi);
    }
}
  
export default new NfeDetalheImpostoIiRoute();