import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_controller";

class ProdutoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produto", verifyToken, Controller.getListProduto);

      Routes.get('/produto/:Id', verifyToken, Controller.getProdutoById);
  
      Routes.post('/produto', verifyToken, Controller.insertProduto);

      Routes.put('/produto/:Id', verifyToken, Controller.updateProduto);
  
      Routes.delete('/produto/:Id', verifyToken, Controller.deleteProduto);
    }
}
  
export default new ProdutoRoute();