import { Request, Response } from "express";
import ClienteFiado from "../services/cliente_fiado_service";

class ClienteFiadoController {
    
    async getListClienteFiado(req: Request, res: Response) {
        try {
            const response = await ClienteFiado.getListClienteFiado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getClienteFiadoById(req: Request, res: Response) {
        try {
            const response = await ClienteFiado.getClienteFiadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertClienteFiado(req: Request, res: Response) {
        try {
            const response = await ClienteFiado.insertClienteFiado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateClienteFiado(req: Request, res: Response) {
        try {
            const response = await ClienteFiado.updateClienteFiado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteClienteFiado(req: Request, res: Response) {
        try {
            const response = await ClienteFiado.deleteClienteFiado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ClienteFiadoController();