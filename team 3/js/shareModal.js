//要素を取得
const modal = document.querySelector(".jsModal"),
    open = document.querySelector(".jsModalOpen"),
    close = document.querySelector(".jsModalClose");

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
    modal.classList.add("is-active");
}
open.addEventListener("click", modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
    modal.classList.remove("is-active");
}
close.addEventListener("click", modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
addEventListener("click", modalOut);
function modalOut(e) {
    if (e.target == modal) {
        modal.classList.remove("is-active");
    }
}
