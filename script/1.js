function click() {
    alert('Xin chào');
}
function bt1() {
    var i = 10;
    var f = 20.5;
    var b = true;
    var s = "Hà Nội";
    document.write("i = " + i);
    document.write("<br/>");
    document.write("f =" + f);
    document.write("<br/>");
    document.write("b =" + b);
    document.write("<br/>");
    document.write("s =" + s);
}
function bt2() {
    var width = 20;
    var height = 10;
    var area = width * height;
    document.write("Area =" + area);
}
function Addition() {
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var add = parseInt(a) + parseInt(b);
    document.write("add = " + add);
}
function Subtraction() {
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var add = a - b;
    document.write("add = " + add);
}
function Multiplication() {
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var add = a * b;
    document.write("add = " + add);
}
function Division() {
    var a = document.getElementById("txta").value;
    var b = document.getElementById("txtb").value;
    var add = a / b;
    document.write("add = " + add);
}
function click2() {
    switch (parseInt(document.getElementById("txt").value)){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            var text = "Tháng có 31 ngày";
            alert(text);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            var text = "Tháng có 30 ngày";
            alert(text);
            break;
        case 2:
            var text = "Tháng có 28 hoặc 29 ngày";
            alert(text);
            break;
        default:
            text = "Tháng không hợp lệ";
    }
}
function yes() {
    alert('""');
}
function no() {
    var x = Math.random()* window.innerHeight;
    var y = Math.random()* window.innerWidth;
    document.getElementById('btno').style.left = x + 'px';
    document.getElementById('btno').style.top = y + 'px';
}
