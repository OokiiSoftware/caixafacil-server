import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_ipi_controller";

class NfeDetalheImpostoIpiRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostoipi", verifyToken, Controller.getListNfeDetalheImpostoIpi);

      Routes.get('/nfedetalheimpostoipi/:Id', verifyToken, Controller.getNfeDetalheImpostoIpiById);
  
      Routes.post('/nfedetalheimpostoipi', verifyToken, Controller.insertNfeDetalheImpostoIpi);

      Routes.put('/nfedetalheimpostoipi/:Id', verifyToken, Controller.updateNfeDetalheImpostoIpi);
  
      Routes.delete('/nfedetalheimpostoipi/:Id', verifyToken, Controller.deleteNfeDetalheImpostoIpi);
    }
}
  
export default new NfeDetalheImpostoIpiRoute();