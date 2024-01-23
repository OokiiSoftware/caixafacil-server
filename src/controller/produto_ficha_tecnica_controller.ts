import { Request, Response } from "express";
import ProdutoFichaTecnica from "../services/produto_ficha_tecnica_service";

class ProdutoFichaTecnicaController {
    
    async getListProdutoFichaTecnica(req: Request, res: Response) {
        try {
            const response = await ProdutoFichaTecnica.getListProdutoFichaTecnica();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoFichaTecnicaById(req: Request, res: Response) {
        try {
            const response = await ProdutoFichaTecnica.getProdutoFichaTecnicaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoFichaTecnica(req: Request, res: Response) {
        try {
            const response = await ProdutoFichaTecnica.insertProdutoFichaTecnica(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoFichaTecnica(req: Request, res: Response) {
        try {
            const response = await ProdutoFichaTecnica.updateProdutoFichaTecnica(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoFichaTecnica(req: Request, res: Response) {
        try {
            const response = await ProdutoFichaTecnica.deleteProdutoFichaTecnica(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoFichaTecnicaController();