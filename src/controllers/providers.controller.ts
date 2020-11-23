import { Request, Response} from 'express';

class ProvidersController {
    index (req: Request, res: Response) {
        const todoslosProductos = ['patatas', 'sandia', 'fresa']

        res.send(todoslosProductos)
    }
    basico (req: Request, res: Response) {
        res.send('vale')
    }


}
export const providerController = new ProvidersController();