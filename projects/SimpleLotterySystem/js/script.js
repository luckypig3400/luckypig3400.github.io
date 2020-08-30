var data = ["奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多","奇多",
            "立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶","立頓奶茶",
            "蝴蝶餅乾","蝴蝶餅乾","蝴蝶餅乾","蝴蝶餅乾","蝴蝶餅乾","蛋黃派","棒棒糖","乖乖軟糖"],
    timer = null, //定時器
    flag = 0, //用於鍵盤事件狀態標記
    random = 0;//用於紀錄抽獎的獎項的陣列
window.onload = function () {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');
    // 開始抽獎
    play.onclick = playFun;
    stop.onclick = stopFun;
    // 鍵盤事件
    document.onkeyup = function (event) {
        event = event || window.event;
        if (event.keyCode == 13) {//keyCode 13 stand for Carriage Return(Enter)
            if (flag == 0) {
                playFun();
                flag = 1;
            } else {
                stopFun();
                flag = 0;
            }
        }
    }
}
// 開始抽獎
function playFun() {
    var title = document.getElementById('title');
    var play = document.getElementById('play');
    //每次都先清除上一次的定時器任務，避免抽獎效果累加頻率會越來越快
    clearInterval(timer);
    timer = setInterval(function () {
        random = Math.floor(Math.random() * data.length);
        if(data.length == 0)title.innerHTML = "獎項都抽完啦`(*>﹏<*)′";
        else title.innerHTML = data[random];
    }, 50);
    play.style.background = '#999';
}
//停止抽獎
function stopFun() {
    clearInterval(timer);
    data.splice(random-1,1);//從陣列抽出該獎項後刪除
    console.log(data.length);//debug用
    var play = document.getElementById('play');
    play.style.background = '#036';
    
}