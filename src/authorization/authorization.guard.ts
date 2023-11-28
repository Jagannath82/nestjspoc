import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
import { expressjwt } from 'express-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private OKTA_AUDIENCE: string;
  private OKTA_DOMAIN: string;
  constructor(configService: ConfigService){
    this.OKTA_AUDIENCE = configService.get('OKTA_AUDIENCE');
    this.OKTA_DOMAIN = configService.get('OKTA_DOMAIN');
  }
  async canActivate(_context: ExecutionContext): Promise<boolean> {
    // const req = _context.getArgByIndex(0);
    // const res = _context.getArgByIndex(1);
    // const checkJwt = promisify(
    //   expressjwt({
    //     secret: expressJwtSecret({
    //       cache: true,
    //       rateLimit: true,
    //       jwksRequestsPerMinute: 5,
    //       jwksUri: '',
    //     }),
    //     audience: this.OKTA_AUDIENCE,
    //     issuer: this.OKTA_DOMAIN,
    //     algorithms: ['RS256'],
    //   }),
    // );

    try {
      //await checkJwt(req, res);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
