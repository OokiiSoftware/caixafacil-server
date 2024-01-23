import { Request, Response } from "express";
import EcfAliquotas from "../services/ecf_aliquotas_service";

class EcfAliquotasController {
    
    async getListEcfAliquotas(req: Request, res: Response) {
        try {
            const response = await EcfAliquotas.getListEcfAliquotas();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfAliquotasById(req: Request, res: Response) {
        try {
            const response = await EcfAliquotas.getEcfAliquotasById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfAliquotas(req: Request, res: Response) {
        try {
            const response = await EcfAliquotas.insertEcfAliquotas(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfAliquotas(req: Request, res: Response) {
        try {
            const response = await EcfAliquotas.updateEcfAliquotas(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfAliquotas(req: Request, res: Response) {
        try {
            const response = await EcfAliquotas.deleteEcfAliquotas(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfAliquotasController();