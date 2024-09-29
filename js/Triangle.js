// Cart 1
const Triangle = () =>{
    let triangleBase = document.getElementById("triangleBase").value;
    let triangleHeight = document.getElementById("triangleHeight").value;
    let base = parseFloat(triangleBase);
    let height = parseFloat(triangleHeight)
    console.log(base);
  
    const area = 0.5 * base * height;
    document.getElementById("areaSpan").innerText = area;

}

// cart 2

function Rectangle(){
    let cartTwoInput1 = document.getElementById('cartTwoInput1');
    let cartTwoInput2 = document.getElementById("cartTwoInput2");
    let width = parseFloat(cartTwoInput1.value);
    let length = parseFloat(cartTwoInput2.value);

    let area = width * length;

    document.getElementById("areaSpan2").innerText = area;

}

function Ellipse(){
    // let cartThreeInput1 = document.getElementById('cartThreeInput1').value;
    // let cartThreeInput2 = document.getElementById("cartThreeInput2").value;

    // let a = parseFloat(cartThreeInput1);
    // let b = parseFloat(cartThreeInput2);

    let a = getInputFild("cartThreeInput1");
    let b = getInputFild("cartThreeInput2")

    let ellli = 3.1416 * a * b;
    document.getElementById("ellipseShow").innerHTML = ellli;

}
function getInputFild(getID){
    const inputFild = document.getElementById(getID);
    const valueFild = inputFild.value;
    const value = parseFloat(valueFild);
    return value;
}



