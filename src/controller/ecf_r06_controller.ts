import { Request, Response } from "express";
import EcfR06 from "../services/ecf_r06_service";

class EcfR06Controller {
    
    async getListEcfR06(req: Request, res: Response) {
        try {
            const response = await EcfR06.getListEcfR06();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfR06ById(req: Request, res: Response) {
        try {
            const response = await EcfR06.getEcfR06ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfR06(req: Request, res: Response) {
        try {
            const response = await EcfR06.insertEcfR06(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfR06(req: Request, res: Response) {
        try {
            const response = await EcfR06.updateEcfR06(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfR06(req: Request, res: Response) {
        try {
            const response = await EcfR06.deleteEcfR06(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfR06Controller();