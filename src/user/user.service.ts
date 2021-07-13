import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { userDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    validateUser(user: User, password: string){
        if (user.password == password) {
            return true;
        }
    }
    async getByUsernName(username: string): Promise<User> {
        return await this.userRepository.findOne({where: {username: username}})
    }
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>
    ){}

    async create(userDto: userDto){
        return await this.userRepository.save(userDto)
    }


}
