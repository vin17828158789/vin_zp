;(function(){
    window.ajax = function(option){
        return new Promise (function(resolve,reject){//通过promise方式接收数据

            var ajax = new XMLHttpRequest();//new一个ajax实例化
            ajax.open(option.type ,option.url );
            ajax.send();
            ajax.onreadystatechange = function(){
                if(ajax.readyState==4 && ajax.status==200){
                    var data = ajax.responseText;//渲染页面
                    resolve(data);
                };
            };

        });
    }
})();