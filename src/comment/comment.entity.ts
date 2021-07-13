import { Post } from "src/post/post.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
@PrimaryGeneratedColumn()
id: number;
@Column('text')
body: string;
@Column('timestamptz',{default: new Date()})
createdAt: string;
@OneToOne(()=> Post)
@JoinColumn()
post: Post;
}