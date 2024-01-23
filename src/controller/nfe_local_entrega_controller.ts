import { Request, Response } from "express";
import NfeLocalEntrega from "../services/nfe_local_entrega_service";

class NfeLocalEntregaController {
    
    async getListNfeLocalEntrega(req: Request, res: Response) {
        try {
            const response = await NfeLocalEntrega.getListNfeLocalEntrega();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeLocalEntregaById(req: Request, res: Response) {
        try {
            const response = await NfeLocalEntrega.getNfeLocalEntregaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeLocalEntrega(req: Request, res: Response) {
        try {
            const response = await NfeLocalEntrega.insertNfeLocalEntrega(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeLocalEntrega(req: Request, res: Response) {
        try {
            const response = await NfeLocalEntrega.updateNfeLocalEntrega(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeLocalEntrega(req: Request, res: Response) {
        try {
            const response = await NfeLocalEntrega.deleteNfeLocalEntrega(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeLocalEntregaController();