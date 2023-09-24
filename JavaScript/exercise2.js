//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7 in array.  

let triangle = [5, 6, 7];
//what is semiperimeter?
let semiperimeter = 0;
for(i=0; i < triangle.length; i++){
   semiperimeter= triangle[i] + semiperimeter;
}

let area = Math.sqrt(semiperimeter * (semiperimeter -  triangle[0]) * (semiperimeter - triangle[1]) * (semiperimeter - triangle[2]))

console.log(area);

