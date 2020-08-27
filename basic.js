

//Access Method
//How will you access the third position of the following array?
        console.log('Access Array');
        let  arr = [5, 10, 15,];
        console.log(arr[2]);
        console.log(' ');


//How will you access the second element, degree from the following object?   
        console.log('Access Object');
        let obj = { name: "Maimoona", degree: "MBBS" };
        console.log(obj.degree);
        console.log(' ');

//How will you access all elements of the following array using loops?
        console.log('Access Array by for loop');
         let arr1 = [1, 2, 3, 4, 5, 6, 7];
        for(i=0; i< arr1.length; i++){
            console.log(i);
        };
        console.log(' ');

        console.log('Access Array by for Each loop');
        arr1.forEach(function(serialNumbers) {
            console.log(serialNumbers);
        });
        console.log(' ');

//How will you access all elements of the following object using loops?
        console.log('Access Object by for Each loop');
        let obj1 ={ name: "Maimoona", degree: "MBBS", age: 25 };
       

    
        Object.keys(obj1).forEach((bio, index) => {
            console.log(bio, obj1[bio]);

        });

        console.log('');


