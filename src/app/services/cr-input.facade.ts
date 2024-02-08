import { Injectable } from "@angular/core";
import { first, map, of, take } from "rxjs";
import { ToBase64 } from "../shared/file";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CrInputFacade {
  async manipulateEventFile(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if(target.files != null || target.files != undefined) {
      const fileForTransfer = target.files[0];

      debugger;

      await ToBase64(fileForTransfer).then(
        (result) => {
          debugger;
          const base64 = result;
        }
      );
    } else {
      throw new Error("Not have file in storage event, please, select new object.");
    }
  }

  managementDataBase64(file: File) {
    return;
  }
}
