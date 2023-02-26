var dosave;
       
        function A53() {
            var waijing=document.getElementById('w').value
            console.log(waijing)
            var bihou=document.getElementById('b').value
            console.log(bihou)
            var s=2*240*Number(bihou)/Number(waijing)*0.6
            console.log(s)
            s2=Math.ceil(s*10)/10
            if (Number(waijing)<=88.9){
                if (s2<17.2){
                    document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+ s2+'MPa';
                    
                }
                else {
                    document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+17.2+'MPa';
                }
       
            }
            else {
                if (Number(waijing)>88.9){
                    if (s2<19.3){
                        document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+s2+'MPa'; 
                    }
                    else {
                        document.getElementById("ss").innerHTML='外径是'+waijing+','+'壁厚是'+bihou+','+'水压是'+19.3+'MPa';
                    }
                }
            }


            // document.getElementById("ss").innerHTML=s2;
            
            
        }
        
        function qingkong() {
            document.getElementById("ss").innerHTML="";
            document.getElementById('w').value="";
            document.getElementById('b').value="";

        }

        function xishu(){
            var myType=document.getElementById('usertype');
            var index=myType.selectedIndex;
            var op1=Number(myType.options[index].value) ;
            // var op2=myType.options[index].text;
            // console.log(op1);
            // console.log(typeof(op1))
            // console.log(op2)
            var waijing=Number(document.getElementById('w5l').value) ;

            if (op1==245){
                return 0.6
            }
            else {
                if (waijing<=141.3){
                    return 0.6
                }
                else {
                    if (141.3<waijing<=219.1){
                        return 0.75
                    }
                    else {
                        if (219.1<waijing<508){
                            return 0.85
                        }
                        else {return 0.9}
                    }
                }
            }

         



            // if (op1=245){
            //     console.log('----1')
            //     return 0.6
            // }
            // else {if (waijing<=141.3){
            //     console.log('----2')
            //     return 0.6
            // }
            // else if (141.3<waijing<=219.1){
            //     return 0.75
            // }
            // else if (219.1<waijing<508){
            //     return 0.85
            // }
            // else {return 0.9}}
            
            
                
            }

        function api5l() {
            var myType=document.getElementById('usertype');
            var index=myType.selectedIndex;
            var op1=Number(myType.options[index].value) ;
            // var op2=myType.options[index].text;
            console.log(op1);
            // console.log(typeof(op1))
            // console.log(op2)

            var waijing=Number(document.getElementById('w5l').value) ;
            console.log(waijing)
            var bihou=Number(document.getElementById('b5l').value) ;
            console.log(bihou)
            
            a=xishu()
            console.log(typeof(a))
            console.log('系数是'+a)


            
            var p=2*op1*Number(bihou)/Number(waijing)*xishu()
            console.log(p)

            document.getElementById("api5l").innerHTML="开发中";


        }
            
