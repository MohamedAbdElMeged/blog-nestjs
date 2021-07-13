import { Controller ,Post ,Res,Req,Get} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    async login(@Res() res , @Req() req){
        const loginResult = await this.authService.login(req.body)
        return await res.status(loginResult.status).json(loginResult.data)
    }

}


