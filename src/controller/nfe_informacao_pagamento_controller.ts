import { Request, Response } from "express";
import NfeInformacaoPagamento from "../services/nfe_informacao_pagamento_service";

class NfeInformacaoPagamentoController {
    
    async getListNfeInformacaoPagamento(req: Request, res: Response) {
        try {
            const response = await NfeInformacaoPagamento.getListNfeInformacaoPagamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeInformacaoPagamentoById(req: Request, res: Response) {
        try {
            const response = await NfeInformacaoPagamento.getNfeInformacaoPagamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeInformacaoPagamento(req: Request, res: Response) {
        try {
            const response = await NfeInformacaoPagamento.insertNfeInformacaoPagamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeInformacaoPagamento(req: Request, res: Response) {
        try {
            const response = await NfeInformacaoPagamento.updateNfeInformacaoPagamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeInformacaoPagamento(req: Request, res: Response) {
        try {
            const response = await NfeInformacaoPagamento.deleteNfeInformacaoPagamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeInformacaoPagamentoController();