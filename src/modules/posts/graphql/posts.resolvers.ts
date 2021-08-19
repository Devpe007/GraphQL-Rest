import { container } from "tsyringe";

import { CreatePostService } from "../services/CreatePostService";

const postsResolvers = {
    Mutation: {
        createPost(_, { input }) {
            const createPostService = container.resolve(CreatePostService);

            const post = createPostService.execute(input);

            return post;
        }
    },
};

export default postsResolvers;