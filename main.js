let result = document.getElementById("result");

//消去
function clear_calc(){
 result.value=0;   
}

// 計算結果を表示
function get_calc(){
    result.value = new Function("return " + result.value)();
}

//演算入力
function edit_calc(btn){
    result.value += btn.value;
}

