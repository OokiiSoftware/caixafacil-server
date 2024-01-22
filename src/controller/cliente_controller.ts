import { Request, Response } from "express";
import Cliente from "../services/cliente_service";

class ClienteController {
    
    async getAll(req: Request, res: Response) {
        try {
            const response = await Cliente.getAll();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const response = await Cliente.getById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insert(req: Request, res: Response) {
        try {
            const response = await Cliente.insert(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }
    
    async update(req: Request, res: Response) {
        try {
            const response = await Cliente.update(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const response = await Cliente.delete(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ClienteController();