import { Request, Response } from "express";
import TributConfiguraOfGt from "../services/tribut_configura_of_gt_service";

class TributConfiguraOfGtController {
    
    async getListTributConfiguraOfGt(req: Request, res: Response) {
        try {
            const response = await TributConfiguraOfGt.getListTributConfiguraOfGt();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributConfiguraOfGtById(req: Request, res: Response) {
        try {
            const response = await TributConfiguraOfGt.getTributConfiguraOfGtById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributConfiguraOfGt(req: Request, res: Response) {
        try {
            const response = await TributConfiguraOfGt.insertTributConfiguraOfGt(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributConfiguraOfGt(req: Request, res: Response) {
        try {
            const response = await TributConfiguraOfGt.updateTributConfiguraOfGt(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributConfiguraOfGt(req: Request, res: Response) {
        try {
            const response = await TributConfiguraOfGt.deleteTributConfiguraOfGt(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributConfiguraOfGtController();