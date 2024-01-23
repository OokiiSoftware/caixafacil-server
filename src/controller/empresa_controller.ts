import { Request, Response } from "express";
import Empresa from "../services/empresa_service";

class EmpresaController {
    
    async getListEmpresa(req: Request, res: Response) {
        try {
            const response = await Empresa.getListEmpresa();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEmpresaById(req: Request, res: Response) {
        try {
            const response = await Empresa.getEmpresaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEmpresa(req: Request, res: Response) {
        try {
            const response = await Empresa.insertEmpresa(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEmpresa(req: Request, res: Response) {
        try {
            const response = await Empresa.updateEmpresa(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEmpresa(req: Request, res: Response) {
        try {
            const response = await Empresa.deleteEmpresa(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EmpresaController();