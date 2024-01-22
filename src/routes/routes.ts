import { Router } from "express";
import ClienteRoute from "./cliente_routes";
import EmpresaRoute from "./empresa_routes";

export const Route: Router = Router();

ClienteRoute.allRoutes(Route);
EmpresaRoute.allRoutes(Route);