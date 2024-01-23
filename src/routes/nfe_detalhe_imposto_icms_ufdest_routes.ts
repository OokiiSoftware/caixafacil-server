import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_icms_ufdest_controller";

class NfeDetalheImpostoIcmsUfdestRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostoicmsufdest", verifyToken, Controller.getListNfeDetalheImpostoIcmsUfdest);

      Routes.get('/nfedetalheimpostoicmsufdest/:Id', verifyToken, Controller.getNfeDetalheImpostoIcmsUfdestById);
  
      Routes.post('/nfedetalheimpostoicmsufdest', verifyToken, Controller.insertNfeDetalheImpostoIcmsUfdest);

      Routes.put('/nfedetalheimpostoicmsufdest/:Id', verifyToken, Controller.updateNfeDetalheImpostoIcmsUfdest);
  
      Routes.delete('/nfedetalheimpostoicmsufdest/:Id', verifyToken, Controller.deleteNfeDetalheImpostoIcmsUfdest);
    }
}
  
export default new NfeDetalheImpostoIcmsUfdestRoute();