import { Request, Response } from "express";
import Cliente from "../services/cliente_service";

class ClienteController {
    
    async getListCliente(req: Request, res: Response) {
        try {
            const response = await Cliente.getListCliente();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getClienteById(req: Request, res: Response) {
        try {
            const response = await Cliente.getClienteById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertCliente(req: Request, res: Response) {
        try {
            const response = await Cliente.insertCliente(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateCliente(req: Request, res: Response) {
        try {
            const response = await Cliente.updateCliente(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteCliente(req: Request, res: Response) {
        try {
            const response = await Cliente.deleteCliente(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ClienteController();