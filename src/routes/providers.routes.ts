import { Router } from 'express';
import { providerController } from '../controllers/providers.controller';

class ProvidersRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', providerController.index );
        this.router.get('/info', );
    }
}

export const providerRoutes = new ProvidersRoutes();