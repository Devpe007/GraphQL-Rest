import "reflect-metadata";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from "./resolvers";
import typeDefs from './schemas';

import { middlewareError } from './middlewares/error/Error';

mongoose.connect("mongodb+srv://AndDev07:pele@2011@graphqlrest.kxiuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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
