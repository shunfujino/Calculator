let result = document.getElementById("result");
let num = ""; // 数字を記憶
let operator = ""; // 演算子を記憶
let count = 0; // get_calc()の直後は1
let ope_on = 0; //最後に入力したのが演算子の場合は1

//消去
function clear_calc() {
    result.value = "";
    num = "";
    operator = "";
    count = 0;
}

// 計算結果を表示
function get_calc() {
    result.value = new Function("return " + result.value)();
    num = "";
    count = 1;
    ope_on = 0;
}

//数字を入力
function edit_calc(btn) {
    if (count == 1) {
        num = btn.value;
        count = 0;
        if(btn.value=="00"){
            result.value="0";
        }else{
            result.value = num;
        
        }
        return;
    }
    
    else if (num == "0" || num == "00" || num == "") {
        if (btn.value == "0" || btn.value == "00") {
            if(ope_on==1){
                return;
            }
            num = "0";
        }
        else {
            num = "" + btn.value;

        }
        result.value += num;
        count = 0;
        ope_on = 0;
        return;
    }
    
    else {
        num += btn.value;
        count = 0;
    }

    result.value += btn.value;
    operator = "";
    ope_on=0;
}

//演算子を入力
function ope_calc(btn) {
    if (ope_on==1) {
        result.value = result.value.slice(0, -1) + btn.value;
    }
    else {
        result.value += btn.value;

    }
    operator = "" + btn.value;
    count = 0;
    ope_on = 1;

}

//小数点を入力
function dot_calc(btn) {
    if(result.value.slice(-1)!="."){
        result.value +=".";
    }
    
}


// function edit_calc(btn) {
//     if (!isNaN(btn.value)) { //数字を入力
//         if (operator == 0) {
//             if (num == "0") {
//                 if (btn.value == "0" || btn.value == "00") {
//                     result.value = "0";
//                     num == "0";
//                 }
//                 else {
//                     result.value = btn.value;
//                     num = "" + result.value;
//                 }
//             }
//             else {
//                 result.value += btn.value;
//                 num += "" + btn.value;
//             }
//         }
//         else {}
//     }
//     else { // 数字以外を入力
//         result.value += btn.value;
//         operator = 1;
//     }

// }
