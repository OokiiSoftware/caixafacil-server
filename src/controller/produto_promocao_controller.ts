import { Request, Response } from "express";
import ProdutoPromocao from "../services/produto_promocao_service";

class ProdutoPromocaoController {
    
    async getListProdutoPromocao(req: Request, res: Response) {
        try {
            const response = await ProdutoPromocao.getListProdutoPromocao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoPromocaoById(req: Request, res: Response) {
        try {
            const response = await ProdutoPromocao.getProdutoPromocaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoPromocao(req: Request, res: Response) {
        try {
            const response = await ProdutoPromocao.insertProdutoPromocao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoPromocao(req: Request, res: Response) {
        try {
            const response = await ProdutoPromocao.updateProdutoPromocao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoPromocao(req: Request, res: Response) {
        try {
            const response = await ProdutoPromocao.deleteProdutoPromocao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoPromocaoController();