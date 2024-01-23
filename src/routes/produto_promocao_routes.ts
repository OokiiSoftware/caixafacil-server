import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_promocao_controller";

class ProdutoPromocaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtopromocao", verifyToken, Controller.getListProdutoPromocao);

      Routes.get('/produtopromocao/:Id', verifyToken, Controller.getProdutoPromocaoById);
  
      Routes.post('/produtopromocao', verifyToken, Controller.insertProdutoPromocao);

      Routes.put('/produtopromocao/:Id', verifyToken, Controller.updateProdutoPromocao);
  
      Routes.delete('/produtopromocao/:Id', verifyToken, Controller.deleteProdutoPromocao);
    }
}
  
export default new ProdutoPromocaoRoute();