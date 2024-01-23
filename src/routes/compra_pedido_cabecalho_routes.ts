import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/compra_pedido_cabecalho_controller";

class CompraPedidoCabecalhoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/comprapedidocabecalho", verifyToken, Controller.getListCompraPedidoCabecalho);

      Routes.get('/comprapedidocabecalho/:Id', verifyToken, Controller.getCompraPedidoCabecalhoById);
  
      Routes.post('/comprapedidocabecalho', verifyToken, Controller.insertCompraPedidoCabecalho);

      Routes.put('/comprapedidocabecalho/:Id', verifyToken, Controller.updateCompraPedidoCabecalho);
  
      Routes.delete('/comprapedidocabecalho/:Id', verifyToken, Controller.deleteCompraPedidoCabecalho);
    }
}
  
export default new CompraPedidoCabecalhoRoute();