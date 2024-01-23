import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_issqn_controller";

class NfeDetalheImpostoIssqnRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostoissqn", verifyToken, Controller.getListNfeDetalheImpostoIssqn);

      Routes.get('/nfedetalheimpostoissqn/:Id', verifyToken, Controller.getNfeDetalheImpostoIssqnById);
  
      Routes.post('/nfedetalheimpostoissqn', verifyToken, Controller.insertNfeDetalheImpostoIssqn);

      Routes.put('/nfedetalheimpostoissqn/:Id', verifyToken, Controller.updateNfeDetalheImpostoIssqn);
  
      Routes.delete('/nfedetalheimpostoissqn/:Id', verifyToken, Controller.deleteNfeDetalheImpostoIssqn);
    }
}
  
export default new NfeDetalheImpostoIssqnRoute();