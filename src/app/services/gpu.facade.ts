import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class GpuFacade {
   private device: GPUDevice;
  private queue: GPUQueue;

  constructor() {
    this.init();
  }

  private async init() {
    const adapter = await window.navigator.gpu.requestAdapter();
    this.device = await adapter.requestDevice();
    this.queue = this.device.defaultQueue;
  }

  public async createBufferWithData(data: Float32Array): Promise<GPUBuffer> {
    const buffer = this.device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE
    });

    // Copy data from CPU memory to GPU buffer
    this.queue.writeBuffer(buffer, 0, data);

    return buffer;
  }
}
