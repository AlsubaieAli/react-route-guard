import { IGuard } from "./base";

export class AuthGuard implements IGuard {
  canActivate(): boolean {
    // Some logic
    return false;
  }
}