import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_tipo_controller";

class ProdutoTipoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtotipo", verifyToken, Controller.getListProdutoTipo);

      Routes.get('/produtotipo/:Id', verifyToken, Controller.getProdutoTipoById);
  
      Routes.post('/produtotipo', verifyToken, Controller.insertProdutoTipo);

      Routes.put('/produtotipo/:Id', verifyToken, Controller.updateProdutoTipo);
  
      Routes.delete('/produtotipo/:Id', verifyToken, Controller.deleteProdutoTipo);
    }
}
  
export default new ProdutoTipoRoute();