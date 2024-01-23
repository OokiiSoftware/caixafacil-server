import { Request, Response } from "express";
import ProdutoSubgrupo from "../services/produto_subgrupo_service";

class ProdutoSubgrupoController {
    
    async getListProdutoSubgrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoSubgrupo.getListProdutoSubgrupo();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoSubgrupoById(req: Request, res: Response) {
        try {
            const response = await ProdutoSubgrupo.getProdutoSubgrupoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoSubgrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoSubgrupo.insertProdutoSubgrupo(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoSubgrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoSubgrupo.updateProdutoSubgrupo(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoSubgrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoSubgrupo.deleteProdutoSubgrupo(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoSubgrupoController();