import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const UserValid = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  delete user.password;

  if (user.isAdmin != true) {
    throw new UnauthorizedException(
      'User does not have permission to access this route!',
    );
  }

  return user;
});
