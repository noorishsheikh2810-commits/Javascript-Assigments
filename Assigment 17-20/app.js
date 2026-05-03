// Q1
// let abc = [];

// Q2
// let efg = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(let i=0 ; i<3 ; i++){
//     for(let j =0 ; j<4 ; j++){
//         document.write(efg[i][j]+' ')
//     }
//     document.write('<br>')
// }
// document.write('<br>')

// Q3
// for(let i=1 ; i<11 ; i++){
//     document.write(i+'<br>')
// }

// Q4
// let tableNo=prompt('Enter a table to show its multiplication table');
// let tableLength=prompt('Enter the length multiplication table');
//  document.write('Multiplication table of '+tableNo+'<br>'+' Length '+tableLength+'<br>'+'<br>')
// for(let i=1;i<=tableLength;i++){
//     document.write(tableNo+' X '+i+' = '+tableNo*i+'<br>')
// }

// Q5
// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for(let i=0 ; i<fruits.length ; i++){
//     document.write(fruits[i]+'<br>')
// }
// document.write('<br>')
// for(let j=0 ; j<fruits.length ; j++){
// document.write('Element at index '+ j + ' is '+fruits[j]+'<br>');}

// Q6
// Part A
// document.write('<h3>'+'Counting'+'</h3>')
// document.write('<br>');
// for(let i=1 ; i<=15; i++){
//     document.write(i+'<br>')};

// Part B
// document.write('<h3>'+'Reverse Counting'+'</h3>');
// document.write('<br>');
// for(let i=10 ;i>=1 ;i--){
//     document.write(i+'<br>')
// }

// Part C
// document.write('<h3>'+'Even'+'</h3>')
// document.write('<br>');
// for(let i=0; i<=20; i++){
//     document.write(i++ +'<br>')};

// Part D
// document.write('<h3>'+'Odd'+'</h3>')
// document.write('<br>');
// for(let i=1 ; i<=19 ; i=i+2){
//     document.write(i+'<br>')};

// Part E
// document.write('<h3>'+'Series'+'</h3>')
// document.write('<br>');
// for(let i=2 ; i<=20 ; i=i+2 ){
//     document.write(i+'k'+'<br>')
// }

// Q7
// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let userInput = prompt('Enter the item name');
// userInput = userInput.toLowerCase();
// let check = false;
// for (let i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         document.write(A[i] + ' is available at index ' + i + ' in our bakery')
//         check = true;
//     }
// }

// if (check === false) {
//     document.write('We are sorry .' + userInput + ' is not available in our bakery')
// }
// document.write('<br>')

// Q8
// let arr=[24,53,78,91,12];
// let largest=arr[0];
// console.log(arr[0])

// for(let i=0; i<arr.length ;i++){
//      if(arr[i]>largest)
//      {largest=arr[i]}
// }
// document.write('Array items : '+arr+'<br>');
// document.write('The largest number is '+largest)
// document.write('<br>')

// Q9
// let ijk =[24,53,78,91,12];
// let smallestNo = ijk [0];

// for(let i=0 ; i<ijk .length ; i++){
//     if(ijk [i]<smallestNo){
//         smallestNo=ijk [i]
//     }
// }
// document.write('Array items : '+ijk +'<br>');
// document.write('The smallest number is '+smallestNo)

// Q10
// for(let n = 5 ; n <= 100; n = n+5){
//     document.write(n+' , ')
// }