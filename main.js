//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_string,dog_names){
    for (let i=0; i< dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
        return ('Matched dog_names: '+ dog_names[i])
    }else{
        return 'No Match'
    }
}
}
console.log(findWords(dog_string,dog_names))
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i<arr.length;i++){
        if(i%2==0){
            arr.splice(i,1,"even index")
        }
    }
    return(arr);
}

console.log(replaceEvens(arr))
    


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



//CODEWARS PROBLEMS:

//link:https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript?filter=me&sort=best_practice&invalids=false

//question:Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//answer:
// function removeExclamationMarks(s) {
//     let result = ''
    
//     for(let i = 0; i < s.length; i++){
//       if(s[i] != '!'){
//         result += s[i]
//       }
//     }
//     return result
//   }

//link:https://www.codewars.com/kata/58261acb22be6e2ed800003a/solutions/javascript?filter=me&sort=best_practice&invalids=false

//question:Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//answer:
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height
//     }
//   }



//link:
//https://www.codewars.com/kata/57f222ce69e09c3630000212/solutions/javascript?filter=me&sort=best_practice&invalids=false

//question:In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
//if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//answer:
// function well(x) {
//     let goodIdeas = 0;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'good') {
//             goodIdeas += 1;
//         }
//     }

//     if (goodIdeas === 0) {
//         return 'Fail!';
//     } else if (goodIdeas > 0 && goodIdeas < 3) {
//         return 'Publish!';
//     } else {
//         return 'I smell a series!';
//     }
// }




//link:
//https://www.codewars.com/kata/53369039d7ab3ac506000467/solutions/javascript?filter=me&sort=best_practice&invalids=false

//question:Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//answer:
// function boolToWord( bool ){
//     if(bool === true){
//       return "Yes"
//     }else{
//       return "No"
//     }
//   }