export function ToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(String(reader.result))
    };
    reader.onerror = (error) => reject(error);
  });
}
