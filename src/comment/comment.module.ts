import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { PostModule } from 'src/post/post.module';
import { PostService } from 'src/post/post.service';
import { CommentController } from './comment.controller';
import { commentProvider } from './comment.provider';
import { CommentService } from './comment.service';

@Module({
    imports: [DatabaseModule, PostModule],
    controllers: [CommentController],
    providers:[...commentProvider,
    CommentService]

})
export class CommentModule {}
