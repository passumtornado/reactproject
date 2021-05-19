import React from 'react'

 function AreaCal() {
     let side1= 5;
     let side2=6;
     let side3 = 7;
     let s = (side1+side2+side3)/2;
     let r = 7.0;
     let Area = Math.ceil(Math.PI * Math.pow(r,2));
     let AreaTriangle = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
     let AreaRectangle = side1 * side3
    return (
        <div>
        <div className="jumbotron bg-dark">
        <h1 className="text-white text-center">{`The area of circle is ${Area}cm `}</h1>
        <h1 className="text-white text-center">{`The area of traingle is ${AreaTriangle}`}</h1>
        <h1 className="text-white text-center">{`The area of rectangle is ${AreaRectangle}cm`}</h1> 
        </div>
        </div>
    )
}
export default AreaCal