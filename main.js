var str = document.getElementById("string");
var lett = document.getElementById("letter");
var arr = document.getElementById("array");

arr.innerText = "";


lett.addEventListener("input", function () {
    var arr1 = str.value.split('');
    var arrOut = [];

    arr1.forEach(function(char, index) {
        if (char === lett.value) {
            arrOut.push(index);
        }
    });

    arr.innerText = arrOut.join(', ');
});



