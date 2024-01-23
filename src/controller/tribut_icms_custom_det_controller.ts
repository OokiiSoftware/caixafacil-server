import { Request, Response } from "express";
import TributIcmsCustomDet from "../services/tribut_icms_custom_det_service";

class TributIcmsCustomDetController {
    
    async getListTributIcmsCustomDet(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomDet.getListTributIcmsCustomDet();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributIcmsCustomDetById(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomDet.getTributIcmsCustomDetById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributIcmsCustomDet(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomDet.insertTributIcmsCustomDet(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributIcmsCustomDet(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomDet.updateTributIcmsCustomDet(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributIcmsCustomDet(req: Request, res: Response) {
        try {
            const response = await TributIcmsCustomDet.deleteTributIcmsCustomDet(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributIcmsCustomDetController();