import { Question } from "@prisma/client";
import { UserInputError } from "apollo-server";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { CreateTestArgs } from "../../prisma/generated/type-graphql";
import { Context } from "../utils/context";

@Resolver()
export class CustomCreateTestResolver {
  @Mutation(() => Boolean)
  async customCreateTest(
    @Ctx() { prisma }: Context,
    @Args() args: CreateTestArgs
  ): Promise<boolean> {
    const tests = await prisma.test.findMany({
      where: { userKey: { equals: args.data.userKey } },
    });

    console.info(tests);

    if (tests.length >= 10) {
      throw new UserInputError("Você não pode ter mais de 10 testes salvos.");
    }

    let verifier = false;
    tests.forEach((test) => {
      const jsonData = test.data as Question[];

      const savedIds = jsonData.map((q) => q.id);
      const newIds = (args.data.data as Question[]).map((q) => q.id);

      if (savedIds.sort().join() === newIds.sort().join()) {
        verifier = true;
      }
    });

    if (verifier) return true;

    await prisma.test.create({
      data: args.data,
    });

    return true;
  }
}
