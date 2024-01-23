import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_icms_controller";

class NfeDetalheImpostoIcmsRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostoicms", verifyToken, Controller.getListNfeDetalheImpostoIcms);

      Routes.get('/nfedetalheimpostoicms/:Id', verifyToken, Controller.getNfeDetalheImpostoIcmsById);
  
      Routes.post('/nfedetalheimpostoicms', verifyToken, Controller.insertNfeDetalheImpostoIcms);

      Routes.put('/nfedetalheimpostoicms/:Id', verifyToken, Controller.updateNfeDetalheImpostoIcms);
  
      Routes.delete('/nfedetalheimpostoicms/:Id', verifyToken, Controller.deleteNfeDetalheImpostoIcms);
    }
}
  
export default new NfeDetalheImpostoIcmsRoute();