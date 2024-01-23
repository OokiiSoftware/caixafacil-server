import { Request, Response } from "express";
import EcfE3 from "../services/ecf_e3_service";

class EcfE3Controller {
    
    async getListEcfE3(req: Request, res: Response) {
        try {
            const response = await EcfE3.getListEcfE3();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfE3ById(req: Request, res: Response) {
        try {
            const response = await EcfE3.getEcfE3ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfE3(req: Request, res: Response) {
        try {
            const response = await EcfE3.insertEcfE3(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfE3(req: Request, res: Response) {
        try {
            const response = await EcfE3.updateEcfE3(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfE3(req: Request, res: Response) {
        try {
            const response = await EcfE3.deleteEcfE3(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfE3Controller();