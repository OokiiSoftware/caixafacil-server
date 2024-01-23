import { Request, Response } from "express";
import Contador from "../services/contador_service";

class ContadorController {
    
    async getListContador(req: Request, res: Response) {
        try {
            const response = await Contador.getListContador();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getContadorById(req: Request, res: Response) {
        try {
            const response = await Contador.getContadorById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertContador(req: Request, res: Response) {
        try {
            const response = await Contador.insertContador(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateContador(req: Request, res: Response) {
        try {
            const response = await Contador.updateContador(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteContador(req: Request, res: Response) {
        try {
            const response = await Contador.deleteContador(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ContadorController();