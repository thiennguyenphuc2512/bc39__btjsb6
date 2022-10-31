function timSoNguyenDuong(){
    var s = 0;
    var n = 0;
    while(s < 10000){
        n++;
        s+=n;
    }
    document.getElementById("output1").innerHTML = "Số nhỏ nhất là "+ n ;
}
timSoNguyenDuong();


function tinhTong (){
    var x = document.getElementById("x").value*1;
    var n = document.getElementById("n").value*1;
    var lt = 1;
    var sum = 0;
    for(var i = 0; i < n; i++){
        lt = lt * x;
        sum += lt;
    }
    document.getElementById("output2").innerHTML = sum;
}



function tinhGiaithua(){
    var n = document.getElementById("nhapso").value*1;
    var gt = 1
    for(var i = 1; i <= n;i++){
        gt = gt* i;
    }
    document.getElementById("output3").innerHTML = gt;
}