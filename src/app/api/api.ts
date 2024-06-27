import requst from "../utils/request";

export function fileUpload(formData: any) {
  console.log(formData)
  return requst.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export function getPictures(data: Object) {
  return requst.get('/api/photo/list', data);
}

export function savePhoto(data: Object) {
  return requst.post('/api/photo/save', data);
}