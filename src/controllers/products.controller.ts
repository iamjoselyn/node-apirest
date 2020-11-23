import { Request, Response} from 'express';
import { Product } from '../models/product.model';
import { Provider } from '../models/provider.model';

class ProductsController {
    public async index (req: Request, res: Response) {
        try{
            const products = await Product.findAll({
                raw:true
            });
            res.send(products);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    };

    public async show (req: Request, res: Response) {

        const product: Product[] = await Product.findAll(
            {
                include: [
                    {
                        model: Provider
                    }
                ]   
            }
        );

        res.send(product);
    }

}
export const productsController = new ProductsController();