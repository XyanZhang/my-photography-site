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


export type numberOrString = number | string; 

export function getPictureDetail(id:numberOrString) {
  return requst.get('/api/photo/detail?id='+id);
}

export function savePhoto(data: Object) {
  return requst.post('/api/photo/save', data);
}

export function saveUser(data: any) {
  return requst.post('/api/user/save', data);
}

export function userInfo() {
  return requst.get('/api/user/info');
}
export function userLogin(data: any) {
  return requst.post('/api/user/login', data);
}