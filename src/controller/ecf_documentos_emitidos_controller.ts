import { Request, Response } from "express";
import EcfDocumentosEmitidos from "../services/ecf_documentos_emitidos_service";

class EcfDocumentosEmitidosController {
    
    async getListEcfDocumentosEmitidos(req: Request, res: Response) {
        try {
            const response = await EcfDocumentosEmitidos.getListEcfDocumentosEmitidos();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfDocumentosEmitidosById(req: Request, res: Response) {
        try {
            const response = await EcfDocumentosEmitidos.getEcfDocumentosEmitidosById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfDocumentosEmitidos(req: Request, res: Response) {
        try {
            const response = await EcfDocumentosEmitidos.insertEcfDocumentosEmitidos(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfDocumentosEmitidos(req: Request, res: Response) {
        try {
            const response = await EcfDocumentosEmitidos.updateEcfDocumentosEmitidos(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfDocumentosEmitidos(req: Request, res: Response) {
        try {
            const response = await EcfDocumentosEmitidos.deleteEcfDocumentosEmitidos(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfDocumentosEmitidosController();