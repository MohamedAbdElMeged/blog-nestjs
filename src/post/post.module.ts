import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { PostController } from './post.controller';
import { postProvider } from './post.provider';
import { PostService } from './post.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostController],
    providers: [
        ...postProvider,
        PostService
        ],
    exports: [PostService]
})

export class PostModule {}
