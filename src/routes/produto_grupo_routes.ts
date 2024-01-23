import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_grupo_controller";

class ProdutoGrupoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtogrupo", verifyToken, Controller.getListProdutoGrupo);

      Routes.get('/produtogrupo/:Id', verifyToken, Controller.getProdutoGrupoById);
  
      Routes.post('/produtogrupo', verifyToken, Controller.insertProdutoGrupo);

      Routes.put('/produtogrupo/:Id', verifyToken, Controller.updateProdutoGrupo);
  
      Routes.delete('/produtogrupo/:Id', verifyToken, Controller.deleteProdutoGrupo);
    }
}
  
export default new ProdutoGrupoRoute();