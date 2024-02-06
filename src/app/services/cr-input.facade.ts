import { Injectable } from "@angular/core";
import { toBase64 } from "../shared/file";
import { first, map, of, take } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CrInputFacade {
  manipulateEventFile(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if(target.files != null || target.files != undefined) {
      const fileForTransfer = target.files[0];

      debugger;

      of(toBase64(fileForTransfer)).subscribe(
        (result) => {
          debugger;
        }
      )
    } else {
      throw new Error("Not have file in storage event, please, select new object.");
    }
  }

  managementDataBase64(file: File) {
    return;
  }
}
