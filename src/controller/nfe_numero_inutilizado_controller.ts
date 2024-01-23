import { Request, Response } from "express";
import NfeNumeroInutilizado from "../services/nfe_numero_inutilizado_service";

class NfeNumeroInutilizadoController {
    
    async getListNfeNumeroInutilizado(req: Request, res: Response) {
        try {
            const response = await NfeNumeroInutilizado.getListNfeNumeroInutilizado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeNumeroInutilizadoById(req: Request, res: Response) {
        try {
            const response = await NfeNumeroInutilizado.getNfeNumeroInutilizadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeNumeroInutilizado(req: Request, res: Response) {
        try {
            const response = await NfeNumeroInutilizado.insertNfeNumeroInutilizado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeNumeroInutilizado(req: Request, res: Response) {
        try {
            const response = await NfeNumeroInutilizado.updateNfeNumeroInutilizado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeNumeroInutilizado(req: Request, res: Response) {
        try {
            const response = await NfeNumeroInutilizado.deleteNfeNumeroInutilizado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeNumeroInutilizadoController();