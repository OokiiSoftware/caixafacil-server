import { Request, Response } from "express";
import NfeProcessoReferenciado from "../services/nfe_processo_referenciado_service";

class NfeProcessoReferenciadoController {
    
    async getListNfeProcessoReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeProcessoReferenciado.getListNfeProcessoReferenciado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeProcessoReferenciadoById(req: Request, res: Response) {
        try {
            const response = await NfeProcessoReferenciado.getNfeProcessoReferenciadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeProcessoReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeProcessoReferenciado.insertNfeProcessoReferenciado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeProcessoReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeProcessoReferenciado.updateNfeProcessoReferenciado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeProcessoReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeProcessoReferenciado.deleteNfeProcessoReferenciado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeProcessoReferenciadoController();