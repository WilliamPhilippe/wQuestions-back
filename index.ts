import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";

import { resolvers } from "./prisma/generated/type-graphql";
import { Context } from "./resolvers/utils/context";

const main = async () => {
  const prisma = new PrismaClient();
  const createContext = ({ req }): Context => {
    const { headers } = req;

    return { prisma, headers };
  };

  const schema = await buildSchema({
    resolvers: [...resolvers],
    validate: false,
  });

  const server = new ApolloServer({ schema: schema, context: createContext });

  const fastInitDB = async () => {
    await prisma.question.findFirst();
    console.warn("DB iniciado!");
  };

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    fastInitDB();
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
