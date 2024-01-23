import { Request, Response } from "express";
import ProdutoGrupo from "../services/produto_grupo_service";

class ProdutoGrupoController {
    
    async getListProdutoGrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoGrupo.getListProdutoGrupo();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getProdutoGrupoById(req: Request, res: Response) {
        try {
            const response = await ProdutoGrupo.getProdutoGrupoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertProdutoGrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoGrupo.insertProdutoGrupo(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateProdutoGrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoGrupo.updateProdutoGrupo(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteProdutoGrupo(req: Request, res: Response) {
        try {
            const response = await ProdutoGrupo.deleteProdutoGrupo(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ProdutoGrupoController();