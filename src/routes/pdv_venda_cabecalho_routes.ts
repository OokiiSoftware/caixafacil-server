import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_venda_cabecalho_controller";

class PdvVendaCabecalhoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvvendacabecalho", verifyToken, Controller.getListPdvVendaCabecalho);

      Routes.get('/pdvvendacabecalho/:Id', verifyToken, Controller.getPdvVendaCabecalhoById);
  
      Routes.post('/pdvvendacabecalho', verifyToken, Controller.insertPdvVendaCabecalho);

      Routes.put('/pdvvendacabecalho/:Id', verifyToken, Controller.updatePdvVendaCabecalho);
  
      Routes.delete('/pdvvendacabecalho/:Id', verifyToken, Controller.deletePdvVendaCabecalho);
    }
}
  
export default new PdvVendaCabecalhoRoute();