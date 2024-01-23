import { Request, Response } from "express";
import NfeLocalRetirada from "../services/nfe_local_retirada_service";

class NfeLocalRetiradaController {
    
    async getListNfeLocalRetirada(req: Request, res: Response) {
        try {
            const response = await NfeLocalRetirada.getListNfeLocalRetirada();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeLocalRetiradaById(req: Request, res: Response) {
        try {
            const response = await NfeLocalRetirada.getNfeLocalRetiradaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeLocalRetirada(req: Request, res: Response) {
        try {
            const response = await NfeLocalRetirada.insertNfeLocalRetirada(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeLocalRetirada(req: Request, res: Response) {
        try {
            const response = await NfeLocalRetirada.updateNfeLocalRetirada(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeLocalRetirada(req: Request, res: Response) {
        try {
            const response = await NfeLocalRetirada.deleteNfeLocalRetirada(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeLocalRetiradaController();