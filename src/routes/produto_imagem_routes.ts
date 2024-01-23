import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_imagem_controller";

class ProdutoImagemRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtoimagem", verifyToken, Controller.getListProdutoImagem);

      Routes.get('/produtoimagem/:Id', verifyToken, Controller.getProdutoImagemById);
  
      Routes.post('/produtoimagem', verifyToken, Controller.insertProdutoImagem);

      Routes.put('/produtoimagem/:Id', verifyToken, Controller.updateProdutoImagem);
  
      Routes.delete('/produtoimagem/:Id', verifyToken, Controller.deleteProdutoImagem);
    }
}
  
export default new ProdutoImagemRoute();