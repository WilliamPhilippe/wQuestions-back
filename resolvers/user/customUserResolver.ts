import { ApolloError, UserInputError } from "apollo-server";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../utils/context";
import {
  CustomCreateUserArgs,
  CustomLoginArgs,
  LoginReturn,
} from "./customArgs";

@Resolver()
export class customUserResolver {
  @Mutation(() => Boolean)
  async customCreateUser(
    @Ctx() { prisma }: Context,
    @Args() args: CustomCreateUserArgs
  ) {
    return true;
  }
}
