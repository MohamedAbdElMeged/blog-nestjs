import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { userDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
      ) {}

    async login(userDto: userDto){
        const user: User = await this.usersService.getByUsernName(userDto.username)
        if(user){
            const checkUserPassword = this.usersService.validateUser(user, userDto.password)
            if (checkUserPassword) {
                const payload = {
                    id: user.id,
                    username: user.username
                }
                return {
                  status: 200,
                    data:   {user: payload,
                   access_token:  this.createToken(payload)   }
                }
            }
            else return {status: 401 , data: "invalid cred."}
        }
        else return {status: 401 , data: "user not found"}

    }

    createToken(userPayload){
        return this.jwtService.sign(userPayload)
        
    }
}
