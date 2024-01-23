import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/fornecedor_controller";

class FornecedorRoute {
    allRoutes(Routes: Router) {
      Routes.get("/fornecedor", verifyToken, Controller.getListFornecedor);

      Routes.get('/fornecedor/:Id', verifyToken, Controller.getFornecedorById);
  
      Routes.post('/fornecedor', verifyToken, Controller.insertFornecedor);

      Routes.put('/fornecedor/:Id', verifyToken, Controller.updateFornecedor);
  
      Routes.delete('/fornecedor/:Id', verifyToken, Controller.deleteFornecedor);
    }
}
  
export default new FornecedorRoute();