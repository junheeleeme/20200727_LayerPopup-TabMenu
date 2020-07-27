

function fnLayerPopup(){

    document.getElementById("ModalLayer").style.display = "block";
}

function fnclosePopup(){

   document.getElementById("ModalLayer").style.display = "none";

}

function galleryOpen(){
    document.getElementById("notice").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("notice_btn").style.backgroundColor = "#efefef";
    document.getElementById("gallery_btn").style.backgroundColor = "#b3dee5";
    document.getElementById("gallery_btn").style.border = "1px solid #cccccc";
    document.getElementById("gallery_btn").style.borderBottom = "none";
    document.getElementById("gallery_btn").style.top ="2px";

       document.getElementById("notice_btn").style.top ="1px";
    document.getElementById("notice_btn").style.border = "none";
    document.getElementById("notice_btn").style.borderBottom =  "1px solid #cccccc";


}

function noticeOpen(){
    document.getElementById("notice").style.display = "block";
    document.getElementById("notice_btn").style.backgroundColor = "#b3dee5";
    document.getElementById("gallery_btn").style.backgroundColor = "#efefef";
    document.getElementById("gallery").style.display = "none";

    document.getElementById("notice_btn").style.border = "1px solid #ccc";
     document.getElementById("notice_btn").style.borderBottom = "none";
   document.getElementById("notice_btn").style.top ="2px";

    document.getElementById("gallery_btn").style.top ="1px";
    document.getElementById("gallery_btn").style.border = "none";
    document.getElementById("gallery_btn").style.borderBottom = "1px solid #ccc";

}

