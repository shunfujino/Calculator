let result = document.getElementById("result");
let num = ""; // 数字を記憶
let count = 0; // get_calc()の直後は1
let ope_on = 0; //最後に入力したのが演算子の場合は1
let dot_on = 0; //最後に入力したのが小数点の場合は1
let ans = "1.1";

//消去
function clear_calc() {
    result.value = "";
    num = "";
    count = 0;
    ope_on = 0;
    dot_on = 0;
}

// 計算結果を表示
function get_calc() {
    result.value = new Function("return " + result.value)();
    ans = "" + result.value;
    count = 1;
    ope_on = 0;
    dot_on = 0;
}

//数字を入力
function edit_calc(btn) {
    if (count == 1) {
        num = btn.value;
        count = 0;
        if (btn.value == "00") {
            result.value = "0";
        }
        else {
            result.value = num;

        }
        return;
    }

    if (result.value == "0" || result.value == "") {
        if (btn.value == "0" || btn.value == "00") {
            result.value = "0";
            num = "0";
            return;
        }
    }

    if (num == "0" || num == "00") {
        if (btn.value == "0" || btn.value == "00") {
            if (ope_on == 1) {
                return;
            }
            num = "0";
            result.value = 0;
            return;
        }

        num = "" + btn.value;
        if (ope_on == 1) {
            result.value += num;
        }
        else {
            result.value = num;
        }
        count = 0;
        ope_on = 0;
        return;
    }

    else {
        num += btn.value;
        count = 0;
    }

    result.value += btn.value;
    ope_on = 0;
}

//(+,-)を入力
function plus_minus_calc(btn) {
    if (ope_on == 1 || result.value.slice(-1) == ".") {
        result.value = result.value.slice(0, -1) + btn.value;
    }
    else {
        result.value += btn.value;

    }
    count = 0;
    ope_on = 1;
    dot_on = 0;
    num = "";
}

//(*,/)を入力
function ope_calc(btn) {
    if (result.value == "" || result.value == "+" || result.value == "-") {
        return;
    }
    if (ope_on == 1 || result.value.slice(-1) == ".") {
        result.value = result.value.slice(0, -1) + btn.value;
    }
    else {
        result.value += btn.value;
    }
    count = 0;
    ope_on = 1;
    dot_on = 0;
    num = "";

}

//小数点を入力
function dot_calc(btn) {
    if(result.value==""){
        result.value+="0.";
        dot_on =1;
        return;
    }
    
    if(count==1)
        if(!Number.isInteger(result.value)){
        return;
    }

    if (dot_on == 1 || ope_on == 1) {
        return;
    }
    if (result.value.slice(-1) != ".") {
        result.value += ".";
        dot_on = 1;
        num += ".";
    }
    count = 0;
    ope_on = 0;
}
