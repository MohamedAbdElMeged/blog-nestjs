import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { postDto } from './dto/post.dto';
import { Post } from './post.entity';


@Injectable()
export class PostService {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<Post>,
      ) {}
    async getAll(): Promise<Post[]> {
        return await this.postRepository.find();
    }
     async getPost(id){
         return await this.postRepository.findOne({where: {id}})
     }
    async create(postdto: postDto){
        return await this.postRepository.save(postdto)
    }
}
