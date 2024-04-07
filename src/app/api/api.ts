import requst from "../utils/request";

export function fileUpload(formData: any) {
  console.log(formData)
  return requst.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}