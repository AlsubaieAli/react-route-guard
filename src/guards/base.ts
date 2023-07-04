import { AuthGuard } from "./AuthGuard";

export interface IGuard {
  canActivate(): boolean;
}

export const AVAILABLE_GUARDS = {
  authGuard: new AuthGuard(),
} satisfies { [key: string]: IGuard};

export type GuardKey = keyof typeof AVAILABLE_GUARDS;