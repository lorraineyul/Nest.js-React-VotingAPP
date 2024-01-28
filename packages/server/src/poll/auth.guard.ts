import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const ctx = GqlExecutionContext.create(context);
    const req: Request = ctx.getContext().req;
    // Check if there is a user ID in the session
    if (req.session && req.session.userId) {
      console.log(req.session.userId); // Log the user ID for debugging
      return true;
    }
    return false;
  }
}
