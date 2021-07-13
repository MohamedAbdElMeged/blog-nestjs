import { Post } from "./post.entity";
import { Connection } from "typeorm";

export const postProvider =[
{
    provide: 'POST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: ['DATABASE_CONNECTION'],
},
]