export function toBase64(file: File) {
  new Promise((resolve, reject) => {
    debugger;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
