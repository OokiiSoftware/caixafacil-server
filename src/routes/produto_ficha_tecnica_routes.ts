import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/produto_ficha_tecnica_controller";

class ProdutoFichaTecnicaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/produtofichatecnica", verifyToken, Controller.getListProdutoFichaTecnica);

      Routes.get('/produtofichatecnica/:Id', verifyToken, Controller.getProdutoFichaTecnicaById);
  
      Routes.post('/produtofichatecnica', verifyToken, Controller.insertProdutoFichaTecnica);

      Routes.put('/produtofichatecnica/:Id', verifyToken, Controller.updateProdutoFichaTecnica);
  
      Routes.delete('/produtofichatecnica/:Id', verifyToken, Controller.deleteProdutoFichaTecnica);
    }
}
  
export default new ProdutoFichaTecnicaRoute();