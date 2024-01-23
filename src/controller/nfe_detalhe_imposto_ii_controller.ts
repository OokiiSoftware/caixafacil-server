import { Request, Response } from "express";
import NfeDetalheImpostoIi from "../services/nfe_detalhe_imposto_ii_service";

class NfeDetalheImpostoIiController {
    
    async getListNfeDetalheImpostoIi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIi.getListNfeDetalheImpostoIi();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoIiById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIi.getNfeDetalheImpostoIiById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoIi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIi.insertNfeDetalheImpostoIi(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoIi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIi.updateNfeDetalheImpostoIi(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoIi(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoIi.deleteNfeDetalheImpostoIi(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoIiController();