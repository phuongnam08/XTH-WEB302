var arr_hinh = [
    // "images/bn11.png",
    "images/bn0.jpg",
    "/images/bn1.jpg",
    "/images/bn2.png",
    "/images/bn3.png"
];

var index = 0;
function prev(){
    index--;
    if (index <= 0) index = arr_hinh.length - 1;
    document.getElementById("hinh").src = arr_hinh[index];
};
function next(){
    index++;
    if (index >= arr_hinh.length) index = 0;
    document.getElementById("hinh").src=arr_hinh[index];
}
setInterval("next()", 5000);

