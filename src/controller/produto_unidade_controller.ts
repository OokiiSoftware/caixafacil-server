import { Request, Response } from "express";
import ProdutoUnidade from "../services/produto_unidade_service";

class ProdutoUnidadeController {
    
    async getListProdutoUnidade(req: Request, res: Response) {
        try {
            const response = await ProdutoUnidade.getListProdutoUnidade();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoUnidadeById(req: Request, res: Response) {
        try {
            const response = await ProdutoUnidade.getProdutoUnidadeById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoUnidade(req: Request, res: Response) {
        try {
            const response = await ProdutoUnidade.insertProdutoUnidade(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoUnidade(req: Request, res: Response) {
        try {
            const response = await ProdutoUnidade.updateProdutoUnidade(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoUnidade(req: Request, res: Response) {
        try {
            const response = await ProdutoUnidade.deleteProdutoUnidade(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoUnidadeController();