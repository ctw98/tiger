let redLight = document.getElementById('red');
let greenLight = document.getElementById('green');
let yellowLight = document.getElementById('yellow');

let redInterval = setInterval(function(){
    redLight.style.opacity = 1; // 亮灯
    setTimeout(function() {
        redLight.style.opacity = 0; // 灭灯
    }, 3000); // 红灯亮三秒
}, 9000); //总循环时间（红+绿+黄）

let greenInterval = setInterval(function() {
    setTimeout(function() {//在红灯亮后开始
        greenLight.style.opacity = 1; //亮灯
        setTimeout(function(){
            greenLight.style.opacity = 0;//灭灯
        }, 1000);//绿灯亮一秒
    }, 3000);//等待红灯亮完的时间
}, 9000);//总循环时间（红+绿+黄）

let yellowInterval = setInterval(() => {
    setTimeout(function(){//在绿灯亮完后开始
        setTimeout(function(){//在黄灯亮之前在等待1秒（因为绿灯亮一秒，然后直接切换到黄灯）
            yellowLight.style.opacity = 1;//亮灯
            setTimeout(function(){
                yellowLight.style.opacity = 0;//灭灯
            }, 2000);//黄灯亮2秒
        }, 4000);//等待红灯和绿灯亮完的时间
    }, 0);//立即执行（因为黄灯是第三个亮的）
}, 9000);//总循环时间（红+绿+黄）