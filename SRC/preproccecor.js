const fs = require('fs');

////////////////////////////////////////////////////

const indendifiers = /(#include| [a-zA-Z1234567890];|<stdio.h>|\/|\/|(?<=\/\/).*)/g

fs.readFile('./newfilel.txt' , (err,data) => {
    if(err){
        console.log(err);
    }

    const identy = data.toString().match(indendifiers)

    console.log(`Identifiers : ${identy}`);
    
   
});

///////////////////////////////////////////////////

const keyword = /(main|printf|return|include|(stdio\.h)|int)/g

fs.readFile('./newfilel.txt' , (err,data) => {
    if(err){
        console.log(err);
    }

    const kword = data.toString().match(keyword)

    console.log(`Keywords : ${kword}`);
    
   
});

///////////////////////////////////////////////////

const operators = /[=<><=>=+*]/g

fs.readFile('./newfilel.txt' , (err,data) => {
    if(err){
        console.log(err);
    }

    const operate = data.toString().match(operators)

    console.log(`Operators : ${operate}`);
    
   
});

////////////////////////////////////////////////////

const delimitter = /[#,;:."']/g

fs.readFile('./newfilel.txt' , (err,data) => {
    if(err){
        console.log(err);
    }

    const delimit = data.toString().match(delimitter)

    console.log(`Delemiters : ${delimit}`);
    
   
});

////////////////////////////////////////////////////





