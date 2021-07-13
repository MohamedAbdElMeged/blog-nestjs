import { Controller, Get, Injectable, Req, Res,Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    async getAll(@Res() res){
        res.status(200).json(
            await this.postService.getAll()
        )
    }
    @Post()
    async create(@Res() res , @Req() req){
        res.status(200).json(
            await this.postService.create(req.body)
        )
    }

}
