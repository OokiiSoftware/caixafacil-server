import { Request, Response } from "express";
import NfeNumero from "../services/nfe_numero_service";

class NfeNumeroController {
    
    async getListNfeNumero(req: Request, res: Response) {
        try {
            const response = await NfeNumero.getListNfeNumero();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeNumeroById(req: Request, res: Response) {
        try {
            const response = await NfeNumero.getNfeNumeroById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeNumero(req: Request, res: Response) {
        try {
            const response = await NfeNumero.insertNfeNumero(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeNumero(req: Request, res: Response) {
        try {
            const response = await NfeNumero.updateNfeNumero(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeNumero(req: Request, res: Response) {
        try {
            const response = await NfeNumero.deleteNfeNumero(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeNumeroController();