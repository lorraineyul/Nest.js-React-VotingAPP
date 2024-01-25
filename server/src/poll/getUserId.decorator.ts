import { createParamDecorator } from "@nestjs/common";

export const GetUserId = createParamDecorator(
  (data, [root, args, ctx, info]) => {
    console.log(ctx.req.session.userId)
    return ctx.req.session.userId;
  })
