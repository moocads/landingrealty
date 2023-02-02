export function checkImageExisted(img) {
  if(!img.data){
    return '/img/about/about-img.jpg'
  }else{
    return img.data[0].attributes.url
  }
}