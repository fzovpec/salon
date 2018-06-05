function plus_picture(index, other_index, other_index_1){
    var img = document.getElementsByClassName('photos_salon_img')[index];
    var other_img = document.getElementsByClassName('photos_salon_img')[other_index];
    var other_img_1 = document.getElementsByClassName('photos_salon_img')[other_index_1];
    var icon_close = document.getElementById('icon_close');
    var icon_close_1 = document.getElementById('icon_close_1');
    var icon_close_2 = document.getElementById('icon_close_2');
    other_img.style.display = 'none';
    other_img_1.style.display = 'none';
    img.style.position = 'relative';
    img.style.zIndex = '9998';
    img.style.width = '700px';
    img.style.height = '80%';
    img.style.margin = 'auto';
    if(index == 0 || index == 3 || index == 6){
        img.style.left = '350px';
    }
    else if(index == 1 || index == 4 || index == 7){
        img.style.right = '100px';
    }
    else{
        img.style.right = '600px'
    }
    if(index<3){
        icon_close.style.display = 'block';
    }
    else if(index>2 && index <6){
        icon_close_1.style.display = 'block';
    }
    else{
        icon_close_2.style.display = 'block';
    }
}
function close_picture1_3(){
    var img = document.getElementsByClassName('photos_salon_img')[0];
    var img1 = document.getElementsByClassName('photos_salon_img')[1];
    var img2 = document.getElementsByClassName('photos_salon_img')[2];
    var icon_close = document.getElementById('icon_close');
    img.style.position = 'static';
    img1.style.position = 'static';
    img2.style.position = 'static';
    img.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';
    img.style.width = '300px';
    img1.style.width = '300px';
    img2.style.width = '300px';
    img.style.height = '200px';
    img1.style.height = '200px';
    img2.style.height = '200px';
    icon_close.style.display = 'none';
    img.style.margin = 'auto';
    img1.style.margin = 'auto';
    img2.style.margin = 'auto';
}
function close_picture4_6(){
    var img = document.getElementsByClassName('photos_salon_img')[3];
    var img1 = document.getElementsByClassName('photos_salon_img')[4];
    var img2 = document.getElementsByClassName('photos_salon_img')[5];
    var icon_close = document.getElementById('icon_close_1');
    img.style.position = 'static';
    img1.style.position = 'static';
    img2.style.position = 'static';
    img.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';
    img.style.width = '300px';
    img1.style.width = '300px';
    img2.style.width = '300px';
    img.style.height = '200px';
    img1.style.height = '200px';
    img2.style.height = '200px';
    icon_close.style.display = 'none';
    img.style.margin = 'auto';
    img1.style.margin = 'auto';
    img2.style.margin = 'auto';
}
function close_picture7_9(){
    var img = document.getElementsByClassName('photos_salon_img')[6];
    var img1 = document.getElementsByClassName('photos_salon_img')[7];
    var img2 = document.getElementsByClassName('photos_salon_img')[8];
    var icon_close = document.getElementById('icon_close_2');
    img.style.position = 'static';
    img1.style.position = 'static';
    img2.style.position = 'static';
    img.style.display = 'block';
    img1.style.display = 'block';
    img2.style.display = 'block';
    img.style.width = '300px';
    img1.style.width = '300px';
    img2.style.width = '300px';
    img.style.height = '200px';
    img1.style.height = '200px';
    img2.style.height = '200px';
    icon_close.style.display = 'none';
    img.style.margin = 'auto';
    img1.style.margin = 'auto';
    img2.style.margin = 'auto';
}