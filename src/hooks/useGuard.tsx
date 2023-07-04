import { AVAILABLE_GUARDS, type GuardKey } from "../guards/base"

const useGuard = (guards: GuardKey[]) => {
  let canActivate = true;

  for (const guard of guards) {
    const keyExists = Object.keys(AVAILABLE_GUARDS).includes(guard);
    if(keyExists && !AVAILABLE_GUARDS[guard].canActivate()) {
      canActivate = false;
      break
    }
  }

  return canActivate;
}

export default useGuard