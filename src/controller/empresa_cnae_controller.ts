import { Request, Response } from "express";
import EmpresaCnae from "../services/empresa_cnae_service";

class EmpresaCnaeController {
    
    async getListEmpresaCnae(req: Request, res: Response) {
        try {
            const response = await EmpresaCnae.getListEmpresaCnae();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEmpresaCnaeById(req: Request, res: Response) {
        try {
            const response = await EmpresaCnae.getEmpresaCnaeById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEmpresaCnae(req: Request, res: Response) {
        try {
            const response = await EmpresaCnae.insertEmpresaCnae(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEmpresaCnae(req: Request, res: Response) {
        try {
            const response = await EmpresaCnae.updateEmpresaCnae(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEmpresaCnae(req: Request, res: Response) {
        try {
            const response = await EmpresaCnae.deleteEmpresaCnae(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EmpresaCnaeController();