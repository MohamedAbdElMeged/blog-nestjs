import { Controller, Req, Res,Post,Get } from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
    constructor(
        private readonly commentService: CommentService
    ){}
    @Post()
    async create(@Res()res , @Req() req){
        return res.status(200).json(
            await this.commentService.create(req.body)
        )
    }
}
