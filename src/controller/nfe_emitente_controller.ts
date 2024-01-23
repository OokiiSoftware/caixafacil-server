import { Request, Response } from "express";
import NfeEmitente from "../services/nfe_emitente_service";

class NfeEmitenteController {
    
    async getListNfeEmitente(req: Request, res: Response) {
        try {
            const response = await NfeEmitente.getListNfeEmitente();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeEmitenteById(req: Request, res: Response) {
        try {
            const response = await NfeEmitente.getNfeEmitenteById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeEmitente(req: Request, res: Response) {
        try {
            const response = await NfeEmitente.insertNfeEmitente(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeEmitente(req: Request, res: Response) {
        try {
            const response = await NfeEmitente.updateNfeEmitente(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeEmitente(req: Request, res: Response) {
        try {
            const response = await NfeEmitente.deleteNfeEmitente(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeEmitenteController();