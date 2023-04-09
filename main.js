const buttons = document.getElementById("btns");
const numbers = document.getElementById("numbers");
const result = document.getElementById("result");
let n = "";

buttons.addEventListener("click", (e)=>{
    //console.log(e.target.value);
    if(e.target.value === "clear")
        clear();
    else if(e.target.value === "delete")
        n = n.slice(0, n.length-1);
    else if(e.target.value === "equal")
        clacResult();
    else if(e.target.value === undefined)
        console.log("bug")
    else
        n += e.target.value

    numbers.innerHTML = n;
});
clacResult = (e)=>{
    let res = eval(n || null);
    if(res == NaN || res == Infinity)
        result.innerHTML = "Can not Divide By Zero"
        else
        result.innerHTML = res;
    
}
clear = (e)=>{
    n = "";
    result.innerHTML = "";
}