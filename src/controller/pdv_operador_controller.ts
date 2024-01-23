import { Request, Response } from "express";
import PdvOperador from "../services/pdv_operador_service";

class PdvOperadorController {
    
    async getListPdvOperador(req: Request, res: Response) {
        try {
            const response = await PdvOperador.getListPdvOperador();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvOperadorById(req: Request, res: Response) {
        try {
            const response = await PdvOperador.getPdvOperadorById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvOperador(req: Request, res: Response) {
        try {
            const response = await PdvOperador.insertPdvOperador(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvOperador(req: Request, res: Response) {
        try {
            const response = await PdvOperador.updatePdvOperador(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvOperador(req: Request, res: Response) {
        try {
            const response = await PdvOperador.deletePdvOperador(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvOperadorController();