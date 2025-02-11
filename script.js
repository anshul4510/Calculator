let str='';
function addText(e){
    str=str+e;
    let str1=str+" ";
    // console.log(str);
    document.querySelector(".output").innerHTML=str1;
}
function calculate(){
    let result=eval(str);
    // console.log(result);
    str=result;
    document.querySelector(".output").innerHTML=str;
}
function clearText() {
    str = "";
    document.querySelector(".output").innerHTML = "";
  }