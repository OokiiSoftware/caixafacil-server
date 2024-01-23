import { Request, Response } from "express";
import EmpresaSegmento from "../services/empresa_segmento_service";

class EmpresaSegmentoController {
    
    async getListEmpresaSegmento(req: Request, res: Response) {
        try {
            const response = await EmpresaSegmento.getListEmpresaSegmento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEmpresaSegmentoById(req: Request, res: Response) {
        try {
            const response = await EmpresaSegmento.getEmpresaSegmentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEmpresaSegmento(req: Request, res: Response) {
        try {
            const response = await EmpresaSegmento.insertEmpresaSegmento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEmpresaSegmento(req: Request, res: Response) {
        try {
            const response = await EmpresaSegmento.updateEmpresaSegmento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEmpresaSegmento(req: Request, res: Response) {
        try {
            const response = await EmpresaSegmento.deleteEmpresaSegmento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EmpresaSegmentoController();