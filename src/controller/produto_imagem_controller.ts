import { Request, Response } from "express";
import ProdutoImagem from "../services/produto_imagem_service";

class ProdutoImagemController {
    
    async getListProdutoImagem(req: Request, res: Response) {
        try {
            const response = await ProdutoImagem.getListProdutoImagem();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoImagemById(req: Request, res: Response) {
        try {
            const response = await ProdutoImagem.getProdutoImagemById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoImagem(req: Request, res: Response) {
        try {
            const response = await ProdutoImagem.insertProdutoImagem(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoImagem(req: Request, res: Response) {
        try {
            const response = await ProdutoImagem.updateProdutoImagem(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoImagem(req: Request, res: Response) {
        try {
            const response = await ProdutoImagem.deleteProdutoImagem(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoImagemController();