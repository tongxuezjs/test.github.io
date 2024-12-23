function A53() {
    var waijing=document.getElementById('w').value
    console.log(waijing)
    var bihou=document.getElementById('b').value
    console.log(bihou)
    var s=2*240*Number(bihou)/Number(waijing)*0.6
    console.log(s)
    s2=Math.ceil(s*10)/10
    console.log(s2)
    if (Number(waijing)<=88.9){
        if (s2<17.2){document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+ s2+'MPa';}
        else {document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+17.2+'MPa';}

    }else {
        if (Number(waijing)>88.9){
            if (s2<19.3){document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+s2+'MPa';}
            else {document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+19.3+'MPa'}

        }else{document.getElementById("ss").innerHTML="错误"}
    }
      
}

function qingkong() {
    document.getElementById("ss").innerHTML="";
    document.getElementById('w').value="";
    document.getElementById('b').value="";
    
}


function xishu() {
    var myType=document.getElementById('usertype');
    var index=myType.selectedIndex;
    var op1=Number(myType.options[index].value) ;
    var waijing=Number(document.getElementById('w5l').value) ;
    if (op1===245){
        return 0.6;
    }else {if (op1!==245){
        if (waijing <= 141.3){
            return 0.6;
        }else if (waijing > 141.3 && waijing <= 219.1){
            return 0.75;
        }else if (waijing > 219.1 && waijing < 508){
            return 0.85
        }else if(waijing >= 508){
            return 0.9
        }

    }
    }  
}
function api5ljisuan() {
    var myType=document.getElementById('usertype');
    var index=myType.selectedIndex;
    var op1=Number(myType.options[index].value) ;
    var waijing=Number(document.getElementById('w5l').value) ;
    var bihou=Number(document.getElementById('b5l').value) ;
    // a=xishu()
    var p=2*op1*Number(bihou)/Number(waijing)*xishu()
    var p1=Math.ceil(p*10)/10
    console.log(p1)
    return p1    
}

function api5l() {

    var pruess=api5ljisuan()
    var waijing=Number(document.getElementById('w5l').value) ;
    var bihou=Number(document.getElementById('b5l').value) ;
    var xishu1=xishu()
    var myType=document.getElementById('usertype');
    var index=myType.selectedIndex;
    var op11=Number(myType.options[index].value) ;

    if (op11===245){
        if (waijing<=88.9){
            if (pruess<17){
                // 小于17
                document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+",水压值是"+pruess+"MPa.";
            }else{
                // 大于17
                document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+",水压值是17.0MPa.";
            }

        }else {
            // 大于88.9
            if (pruess<19){
                document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+",水压值是"+pruess+"MPa.";

            }else{
                // 大于19Mpa
                document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+",水压值是19.0MPa."

            }

        }

        
    } else {
        // 不等于245
        if (pruess<20.5){
            document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+"水压值是"+pruess+"MPa.";

        }else{
            // 大于20.5
            document.getElementById("api5l").innerHTML="外径是"+waijing+",壁厚是"+bihou+",系数是"+xishu1+"水压值是20.5MPa.";

        }

    }

// 下面的是函数的括号  
}

function qingchu() {
    document.getElementById('w5l').value="";
    document.getElementById('b5l').value="";
    document.getElementById("api5l").innerHTML="";  
}
// 清除重量的参数
function qingchu3() {
    document.getElementById('w5w').value="";
    document.getElementById('b5w').value="";
    document.getElementById('long').value="";
    document.getElementById('pcs').value="" ;
    document.getElementById("weight").innerHTML="";  
}

// 计算重量

function weight1() {
    var outd=Number(document.getElementById('w5w').value);
    console.log(outd)
    var thickness=Number(document.getElementById('b5w').value) ;
    var lo=Number(document.getElementById('long').value) ;
    var pcs=Number(document.getElementById('pcs').value) ;

    weight=(outd-thickness)*thickness*0.0246615*lo/1000*pcs
    // 公斤
    weight2=weight.toFixed(3)
    // console.log(weight2)
    // 吨
    weight3=weight/1000

    weight4=weight3.toFixed(3)


    // console.log(weight4)


    if (outd==0){
        document.getElementById("weight").innerHTML="请输入信息"
    }else{
        document.getElementById("weight").innerHTML="外径是"+outd+";壁厚"+thickness+";长度"+lo+";支数"+pcs+";公斤重量是"+weight2+"KG"+";约"+weight4+"吨"


    }
    





    
}

//计算断后伸长率
function shenchanglv() {
    var width=Number(document.getElementById('width').value);
    var thickness_1=Number(document.getElementById('thickness1').value);
    var usertype_1=document.getElementById('usertype1');
    var index_1=usertype_1.selectedIndex;
    var op_11=Number(usertype_1.options[index_1].value) ;


    shenchanglv_value=1940*((width*thickness_1)**0.2)/((op_11)**0.9)
    document.getElementById("shenchanglv1").innerHTML=""

    document.getElementById("shenchanglv1").innerHTML="宽度是"+width+";公称壁厚"+thickness_1+";最小抗拉强度是"+op_11+"MPa;计算后的最小断后伸长率是"+shenchanglv_value.toFixed(2)+"%"

}

function qingchu4() {
    document.getElementById('width').value="";
    document.getElementById('thickness1').value="";
    
}