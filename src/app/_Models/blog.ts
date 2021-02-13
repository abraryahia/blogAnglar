import { Comment } from "./comment";

export class Blog {
    constructor(public title: string, public body: string, public tag: string[], public createdAt?: Date, public _id?: string, public comments?: Comment[], public likes_count?: number) {

    }
}
