import { Request, Response } from "express";
import FidelidadeUtilizado from "../services/fidelidade_utilizado_service";

class FidelidadeUtilizadoController {
    
    async getListFidelidadeUtilizado(req: Request, res: Response) {
        try {
            const response = await FidelidadeUtilizado.getListFidelidadeUtilizado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getFidelidadeUtilizadoById(req: Request, res: Response) {
        try {
            const response = await FidelidadeUtilizado.getFidelidadeUtilizadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertFidelidadeUtilizado(req: Request, res: Response) {
        try {
            const response = await FidelidadeUtilizado.insertFidelidadeUtilizado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateFidelidadeUtilizado(req: Request, res: Response) {
        try {
            const response = await FidelidadeUtilizado.updateFidelidadeUtilizado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteFidelidadeUtilizado(req: Request, res: Response) {
        try {
            const response = await FidelidadeUtilizado.deleteFidelidadeUtilizado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new FidelidadeUtilizadoController();