import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_subgrupo_controller";

class ProdutoSubgrupoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtosubgrupo", verifyToken, Controller.getListProdutoSubgrupo);

      Routes.get('/produtosubgrupo/:Id', verifyToken, Controller.getProdutoSubgrupoById);
  
      Routes.post('/produtosubgrupo', verifyToken, Controller.insertProdutoSubgrupo);

      Routes.put('/produtosubgrupo/:Id', verifyToken, Controller.updateProdutoSubgrupo);
  
      Routes.delete('/produtosubgrupo/:Id', verifyToken, Controller.deleteProdutoSubgrupo);
    }
}
  
export default new ProdutoSubgrupoRoute();