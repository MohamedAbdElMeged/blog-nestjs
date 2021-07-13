import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column('text')
    body: string;
    @Column('timestamptz',{default: new Date()})
    createdAt: string;

}