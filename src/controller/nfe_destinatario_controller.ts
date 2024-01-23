import { Request, Response } from "express";
import NfeDestinatario from "../services/nfe_destinatario_service";

class NfeDestinatarioController {
    
    async getListNfeDestinatario(req: Request, res: Response) {
        try {
            const response = await NfeDestinatario.getListNfeDestinatario();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDestinatarioById(req: Request, res: Response) {
        try {
            const response = await NfeDestinatario.getNfeDestinatarioById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDestinatario(req: Request, res: Response) {
        try {
            const response = await NfeDestinatario.insertNfeDestinatario(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDestinatario(req: Request, res: Response) {
        try {
            const response = await NfeDestinatario.updateNfeDestinatario(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDestinatario(req: Request, res: Response) {
        try {
            const response = await NfeDestinatario.deleteNfeDestinatario(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDestinatarioController();