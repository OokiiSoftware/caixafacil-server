import { Request, Response } from "express";
import EcfRelatorioGerencial from "../services/ecf_relatorio_gerencial_service";

class EcfRelatorioGerencialController {
    
    async getListEcfRelatorioGerencial(req: Request, res: Response) {
        try {
            const response = await EcfRelatorioGerencial.getListEcfRelatorioGerencial();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfRelatorioGerencialById(req: Request, res: Response) {
        try {
            const response = await EcfRelatorioGerencial.getEcfRelatorioGerencialById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfRelatorioGerencial(req: Request, res: Response) {
        try {
            const response = await EcfRelatorioGerencial.insertEcfRelatorioGerencial(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfRelatorioGerencial(req: Request, res: Response) {
        try {
            const response = await EcfRelatorioGerencial.updateEcfRelatorioGerencial(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfRelatorioGerencial(req: Request, res: Response) {
        try {
            const response = await EcfRelatorioGerencial.deleteEcfRelatorioGerencial(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfRelatorioGerencialController();