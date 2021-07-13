import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { commentDto } from './comment.dto';
import { Comment } from './comment.entity';
import { PostService } from 'src/post/post.service';
@Injectable()
export class CommentService {

    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentRepository: Repository<Comment>,
         private readonly  postService: PostService
    ){
    }

    async create(commentDto: commentDto) {
        commentDto.post = await this.postService.getPost(commentDto.post)
       return await this.commentRepository.save(commentDto)
    }
}
