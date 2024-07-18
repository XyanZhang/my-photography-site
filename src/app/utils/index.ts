export function urlHandle(url:string) {
  if(!url) return ''
  return '/' + url.replaceAll('\\','/')
}