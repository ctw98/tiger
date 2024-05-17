async function fetchData(url,options = {}){
    try {
        const response = await fetch(url,options);

        //检查响应状态码是否在200-299之间
        if(!response.ok){
            throw new Error(`HTTP error!status:${response.status}`);
        }

        //解析响应数据
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:',error);
        throw error; //可以选择是否重新抛出错误
    }
}

//使用封装后的fetch函数
async function fetchAndUseData(){
    try {
        const url = 'https://api.example.com/data';
        const data = await fetchData(url);

        //使用获取到的数据
        console.log(data);
        //做一些其他的处理。。

    } catch (error) {
        console.error('Error fetching and using data:',error);
    }
}

//调用函数
fetchAndUseData();