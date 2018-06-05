function plus_picture(index, other_index, other_index_1){
    var img = document.getElementsByClassName('photos_salon_img')[index];
    var other_img = document.getElementsByClassName('photos_salon_img')[other_index];
    var other_img_1 = document.getElementsByClassName('photos_salon_img')[other_index_1];
    other_img.style.display = 'none';
    other_img_1.style.display = 'none';
    img.style.position = 'relative';
    img.style.zIndex = '9999';
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
}