import { Router } from "express";
import ClienteRoute from "./cliente_routes";
import EmpresaRoute from "./empresa_routes";
import LoginRoute from './login_routes';

export const Route: Router = Router();

ClienteRoute.allRoutes(Route);
EmpresaRoute.allRoutes(Route);
LoginRoute.allRoutes(Route);