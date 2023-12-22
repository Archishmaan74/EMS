import { CanActivateFn } from '@angular/router';

export const hrGuard: CanActivateFn = (route, state) => {
  let uname = prompt("Enter HR username: ");
  if(uname == "Archishmaan"){
    let pass = prompt("Enter password: ");
      if(pass == "1234"){
        return true;
      }
  }
  return false
};
