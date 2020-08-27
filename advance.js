// OBJECT OF KHEER RECIEPE 

console.log('OBJECT OF KHEER RECIEPE ');
console.log('');


let dish = {
    name: 'kheer',
    serves: 10,
    ingredients:['milk', 'rice', 'sugar', 'almond' ]
}
console.log('dish: ' + dish.name);
console.log('serves: ' + dish.serves); 
 console.log('Ingredients of ' + 'are: ' )
dish.ingredients.forEach(function(sweet){
    console.log(sweet);
});
console.log('');


   //    READING LIST
console.log('READIG LIST');
console.log('');



let books = [
    {
        title: 'Apple Cart',
        author: 'G. B. Shaw	',
        isRead: true
    },
    {
        title: 'Shape of things to come',
        author: 'H.G.Wells',
        isRead: false
    },
    {
        title: 	'Historica',
        author: 'Herodotus',
        isRead: true
    }
]


books.forEach(function(kitab){
    if(kitab.isRead == true){
        console.log('you read already this book:  ' + '"' + kitab.title + '"' + ' by ' + kitab.author);
    }
    else{
        console.log('You stil need to read: ' + '"' + kitab.title + '"' + ' by ' + kitab.author);
    }

    console.log('')

})


    

