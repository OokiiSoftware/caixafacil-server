import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/compra_pedido_detalhe_controller";

class CompraPedidoDetalheRoute {
    allRoutes(Routes: Router) {
      Routes.get("/comprapedidodetalhe", verifyToken, Controller.getListCompraPedidoDetalhe);

      Routes.get('/comprapedidodetalhe/:Id', verifyToken, Controller.getCompraPedidoDetalheById);
  
      Routes.post('/comprapedidodetalhe', verifyToken, Controller.insertCompraPedidoDetalhe);

      Routes.put('/comprapedidodetalhe/:Id', verifyToken, Controller.updateCompraPedidoDetalhe);
  
      Routes.delete('/comprapedidodetalhe/:Id', verifyToken, Controller.deleteCompraPedidoDetalhe);
    }
}
  
export default new CompraPedidoDetalheRoute();