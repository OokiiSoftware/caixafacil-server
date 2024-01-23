import { Request, Response } from "express";
import Produto from "../services/produto_service";

class ProdutoController {
    
    async getListProduto(req: Request, res: Response) {
        try {
            const response = await Produto.getListProduto();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoById(req: Request, res: Response) {
        try {
            const response = await Produto.getProdutoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProduto(req: Request, res: Response) {
        try {
            const response = await Produto.insertProduto(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProduto(req: Request, res: Response) {
        try {
            const response = await Produto.updateProduto(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProduto(req: Request, res: Response) {
        try {
            const response = await Produto.deleteProduto(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoController();