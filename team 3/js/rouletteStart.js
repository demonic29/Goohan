$(function () {
    var modalBtn = $(".modalBtn");
    var modalBtnClose = $(".modalBtnClose");
    var modalBg = $(".modalBg");
    var modalBbg = $(".modalBbg");
    var modalMain = $(".modalMain");
    var modalSub = $(".modalSub");
    var btnStart = $(".btnStyle");
    var modalMmain = $(".modalMmain");
    var start = $(".startBtn");
    var stop = $(".stopBtn");

    modalBtn.on("click", function (e) {
        $(this).next(modalBg).fadeIn();
        $(this).next(modalBg).next(modalMain).removeClass("_slideDown");
        $(this).next(modalBg).next(modalMain).addClass("_slideUp");
    });

    //
    //鼻の部分をクリックしたら閉じる
    //

    modalBtnClose.on("click", function (e) {
        modalBg.fadeOut();
        modalMain.removeClass("_slideUp");
        modalMain.addClass("_slideDown");
    });

    $(function () {
        start.on("click", function () {
            // startBtnがクリックされたときにstopBtnのz-indexを削除し、表示する
            stop.css("z-index", "1");
        });
    });
});

//
//モーダルの外をクリックしたら閉じるを支えている部分
//modalMainをクリックしても閉じないようにする
//

// modalMain.on("click", function (e) {
//     e.stopPropagation();
// });

//
//モーダルの外をクリックしたら閉じる
//

// modalBg.on("click", function () {
//     $(this).fadeOut();
//     $(this).next(modalMain).removeClass("_slideUp");
//     $(this).next(modalMain).addClass("_slideDown");
// });

// btnStart.on("click", function (e) {
//     $(this).next(modalWrap).fadeIn();
//     $(this).next(modalMain).next(modalWrap).removeClass("_slideDown");
//     $(this).next(modalMain).next(modalWrap).addClass("_slideUp");
// });
