import { Request, Response } from "express";
import ProdutoTipo from "../services/produto_tipo_service";

class ProdutoTipoController {
    
    async getListProdutoTipo(req: Request, res: Response) {
        try {
            const response = await ProdutoTipo.getListProdutoTipo();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoTipoById(req: Request, res: Response) {
        try {
            const response = await ProdutoTipo.getProdutoTipoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoTipo(req: Request, res: Response) {
        try {
            const response = await ProdutoTipo.insertProdutoTipo(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoTipo(req: Request, res: Response) {
        try {
            const response = await ProdutoTipo.updateProdutoTipo(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoTipo(req: Request, res: Response) {
        try {
            const response = await ProdutoTipo.deleteProdutoTipo(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoTipoController();