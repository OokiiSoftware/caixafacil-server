import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_venda_detalhe_controller";

class PdvVendaDetalheRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvvendadetalhe", verifyToken, Controller.getListPdvVendaDetalhe);

      Routes.get('/pdvvendadetalhe/:Id', verifyToken, Controller.getPdvVendaDetalheById);
  
      Routes.post('/pdvvendadetalhe', verifyToken, Controller.insertPdvVendaDetalhe);

      Routes.put('/pdvvendadetalhe/:Id', verifyToken, Controller.updatePdvVendaDetalhe);
  
      Routes.delete('/pdvvendadetalhe/:Id', verifyToken, Controller.deletePdvVendaDetalhe);
    }
}
  
export default new PdvVendaDetalheRoute();