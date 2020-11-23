import { Request, Response} from 'express';
import { User } from '../models/user.model';

class UsersController {
    public async index (req: Request, res: Response) {
        try{
            const users = await User.findAll({
                raw:true
            });
            res.send(users);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

    public async id (req: Request, res: Response) {
        try{
            const usersId = await User.findByPk(req.params.id);
            res.send(usersId);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

    public async show (req: Request, res: Response) {

        // User.findAll({
        //     raw: true
        // })
        // .then((users) => {
        //     console.log(users);
        //     res.send(users);
        // })
        // .catch((error) => {
        //     console.log(error);  
        // })

        const results = await User.findAll({
            attributes: ["name"]
        })
        res.send(results);
    }

    public async create (req: Request, res: Response) {
        try {
            const request = req.body;
            const newUser = await User.create()

            res.json(request);
        }catch(error){
            res.json(error);
        }
        
    }

}
export const userController = new UsersController();
