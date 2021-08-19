import "reflect-metadata";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from "./resolvers";
import typeDefs from './schemas';

import { middlewareError } from './middlewares/error/Error';

mongoose.connect("mongodb://localhost:27017/code_drops", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use(express.json());

app.use(middlewareError);

app.listen(4003, () => console.log("Server is running"));
