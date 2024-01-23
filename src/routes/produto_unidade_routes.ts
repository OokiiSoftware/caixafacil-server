import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_unidade_controller";

class ProdutoUnidadeRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtounidade", verifyToken, Controller.getListProdutoUnidade);

      Routes.get('/produtounidade/:Id', verifyToken, Controller.getProdutoUnidadeById);
  
      Routes.post('/produtounidade', verifyToken, Controller.insertProdutoUnidade);

      Routes.put('/produtounidade/:Id', verifyToken, Controller.updateProdutoUnidade);
  
      Routes.delete('/produtounidade/:Id', verifyToken, Controller.deleteProdutoUnidade);
    }
}
  
export default new ProdutoUnidadeRoute();