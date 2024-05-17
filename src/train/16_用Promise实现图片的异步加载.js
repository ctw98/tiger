function loadImage(url){
    return new Promise((resolve,reject) =>{
        let img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.onerror =(error) => {
            reject(error);
        }
        img.src = url;
    });
}

//使用方式
loadImage('http://example.com/path/to/image.jpg')
    .then(img => {
        document.body.appendChild(img);
        console.log('图片加载成功');
    })
    .catch(error => {
        console.error('图片加载失败',error);
    })