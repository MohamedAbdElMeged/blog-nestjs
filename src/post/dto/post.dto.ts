import { IsNotEmpty } from "class-validator";

export class postDto {
    @IsNotEmpty({message: "title required"})
    title: string;
    @IsNotEmpty({message: "body required"})
    body: string;
}