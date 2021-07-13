import { Controller, Inject,Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post('/signup')
    async create(@Res() res, @Req() req){
        return res.status(200).json(
            await this.userService.create(req.body)
        )
    }
    
}
