import { Injectable, inject } from "@angular/core";
import { first, map, of, take } from "rxjs";
import { ToBase64 } from "../shared/file";
import { GpuFacade } from "./gpu.facade";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CrInputFacade {
  readonly gpuFacade = inject(GpuFacade);

  async manipulateEventFile(event: Event) {
    const target = event.currentTarget as HTMLInputElement;

    if(target.files != null || target.files != undefined) {
      const fileForTransfer = target.files[0];

      await ToBase64(fileForTransfer).then(
        (result) => {
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
