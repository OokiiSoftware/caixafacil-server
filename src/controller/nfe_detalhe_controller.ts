import { Request, Response } from "express";
import NfeDetalhe from "../services/nfe_detalhe_service";

class NfeDetalheController {
    
    async getListNfeDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeDetalhe.getListNfeDetalhe();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheById(req: Request, res: Response) {
        try {
            const response = await NfeDetalhe.getNfeDetalheById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeDetalhe.insertNfeDetalhe(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeDetalhe.updateNfeDetalhe(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalhe(req: Request, res: Response) {
        try {
            const response = await NfeDetalhe.deleteNfeDetalhe(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheController();