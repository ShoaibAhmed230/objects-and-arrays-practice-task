//Students Names and Hobbies Data

console.log('Students Names and Hobbies Data');

console.log('');

let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];
for(i=0; i<students.length; i++){
    console.log('Hobbies of ' + students[i].name);

    for(j=0; j<students[i].hobbies.length; j++){
        console.log(j+1 + '.' + students[i].hobbies[j]);
    };
    console.log(' ');
};
    console.log(' ');


//Extensive Students Data

    console.log('Extensive Students Data');

    console.log(' ');
  
    
    let students2 = [
        {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
        },
        {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
        },
        {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
        },
        {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
        },
        {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
        }
    ];

    //1. each student's some data:
    
    console.log('1. Each students some data:');

    console.log('');

    students2.forEach(function(details) {
        console.log('Name :' + details.name);
        
        if(details.gender == 'f'){
            console.log('gender : female');
        }
        else{
            console.log('gender : male');

        };
        console.log('city :' + details.address.city);
       console.log('Score  : ' + details.admissionTestScore + ' Marks');
       console.log('');

    });
   
    console.log('');

    //2. names of female students only.
   
    console.log('2. Names of female students only.');
    students2.forEach(function(person) {
        if (person.gender == "f") {
            console.log(person.name)
        }
    })
  
    console.log('');

    //3. names of male students only.

    console.log('3. Names of male students only.');

    students2.forEach(function(person) {
        if (person.gender == "m") {
            console.log(person.name)
        }
    })
    console.log('');

  
//4. names of students who have passed the admission test. Passing marks are 50.

    console.log('4. names of students who have passed the admission test. Passing marks are 50.');

    console.log('Amna: ' + students2[0].admissionTestScore + ' Marks');
    console.log('');

//5. names of eligible students only (students who have internet and live in Karachi are eligible)

    console.log('5. names of eligible students only (students who have internet and live in Karachi are eligible)');

    students2.forEach(function(eligibility) {
        if (eligibility.hasInternet == true && eligibility.address.city == 'Karachi') {
            console.log(eligibility.name);
            
        };
    });

     console.log('');

//6.address of each student 

console.log('6. Address of each student ');

students2.forEach(function(homeAdd) {
    console.log(homeAdd.name + "'s :");
    console.log(homeAdd.address.ilaqa + ' in ' + homeAdd.address.city + ',' + homeAdd.address.country);

    
});

console.log('');


// 7.Names and phone number of students who have Ufone.

console.log('7.  Names and phone number of students who have Ufone.')

students2.forEach(function(unumber) {
    
if (unumber.phoneNo.includes ("0331") || unumber.phoneNo.includes ("0332") || unumber.phoneNo.includes ("0333")
|| unumber.phoneNo.includes ("0334") || unumber.phoneNo.includes ("0335")) {
    console.log(unumber.name + "'s " + 'Ufone Number: ' + unumber.phoneNo);
};
    
});

console.log('');

// 8. Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, :


console.log('8. Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B,');

 students2.forEach(function(grouping) {
     if (grouping.hasJob == true && grouping.hasSchoolBefore == true) {
         console.log('Group B:' + grouping.name);
     }
     else{

         console.log('Group A:' + grouping.name);
     };
    
  });

console.log('');
  
//9. Age of each student. 

console.log('9. Age of each student.');

let year = new Date().getYear()
 students2.forEach(function(ages) {
     console.log(ages.name + "'s age is " + (year - ages.dob.getYear()) + ' years')
 
     
 });

console.log('');

//10.  The name of the oldest student.

console.log('10 .The name of the oldest student.');

console.log(students2[4].name)


// let oldest = { age: 0 };
// for (let i = 0; i < students2.length; i++) {
//     if (students2[i].age > oldest.age) {
//         oldest = students2[i];
//         console.log(students2.name)
//     }
// }


console.log('');

// Videos Data Task

console.log(' Videos Data Task');


let videos = [
    {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
    },
    {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
    },
    {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
    },
    {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 30,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
    },
    {
    title: "How to use framework in our website",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("1-01-2012"),
    tags: "framework, web development",
    features: ["Purchased", "HD"],
    viewCount: 9595,
    rating: 5.5
    },
    {
    title: "How to build communication skills -  by guidliners",
    lengthInMinutes: 25,
    category: "Education",
    uploadDate: new Date("12-06-2000"),
    tags: "build communication skills, guidliners",
    features: ["Purchased"],
    viewCount: 9984,
    rating: 9.5
    },
    {
    title: "How to builde muscles - by Fitness Gym",
    lengthInMinutes: 5,
    category: "Fitness",
    uploadDate: new Date("05-12-2015"),
    tags: "builde muscles",
    features: ["Purchased", "HD"],
    viewCount: 10004,
    rating: 10.5
    },
    {
    title: "Episode-20, season-1, Ertugul Gazi",
    lengthInMinutes: 45,
    category: "Islamic dram",
    uploadDate: new Date("08-26-2020"),
    tags: "historical, on realist",
    features: ["urdu dubbed", "3D", "HD"],
    viewCount: 305615,
    rating: 9.9
    },
    {
    title: "English shadi - The Best Comedy vidoes by Karachi vynz",
    lengthInMinutes: 9,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: [ "mp4", "HD"],
    viewCount: 5615,
    rating: 6.9
    },
    {
    title: "how to draw male/female face - The Best arts videos by RapidFileArt",
    lengthInMinutes: 16,
    category: "art",
    uploadDate: new Date("01-08-2020"),
    tags: "comedy, funny",
    features: ['3D', "HD"],
    viewCount: 1615,
    rating: 5.9
    },
    {
    title: "What is Doomsday clock - by knowledge factory",
    lengthInMinutes: 9,
    category: "general knowledge",
    uploadDate: new Date("01-02-2009"),
    tags: "knowledge",
    features: ["mp4", "3D"],
    viewCount: 15615,
    rating: 1.9
    },
    {
    title: "cherry blossom painting - by jay lee painting",
    lengthInMinutes: 19,
    category: "painting",
    uploadDate: new Date("05-08-2020"),
    tags: "comedy, funny",
    features: [ "3D", "HD"],
    viewCount: 1415,
    rating: 3
    },
    {
    title: "Exam FIASCO- The Best Comedy Show by mr bean",
    lengthInMinutes: 19,
    category: "full comedy",
    uploadDate: new Date("01-09-2020"),
    tags: "comedy, funny",
    features: [ "3D", "HD"],
    viewCount: 135615,
    rating: 5.9
    },
    {
    title: "complete Guidance for CA- The Best guideline vidoe by Amjad Niaz",
    lengthInMinutes: 15,
    category: "information",
    uploadDate: new Date("07-01-2020"),
    tags: "comedy, funny",
    features: ["Subtitles/CC"],
    viewCount: 149915,
    rating: 15.9
    },
    
    
];

console.log('');

//1. Add at least 10 more videos to the above array and before writing the following programs in JS.
 console.log('1. Add at least 10 more videos to the above array and before writing the following programs in JS.')
 

console.log('10 arrays added in objects');
console.log('');

//2. Print each videos.
console.log('2. Print each videos.');
// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4,700
// Uploaded On: 22-July-2019
// Rating: 

   // delete videos[0].tags;
   // delete videos[0].features;
    


    videos.forEach(function(clips) {
        console.log('Title: ' + clips.title);
        console.log('Length: ' + clips.lengthInMinutes);
        console.log('Category: ' + clips.category);
        console.log('Views: ' + clips.viewCount);
        console.log('Uploaded: ' + clips.uploadDate);
        console.log('Rating: ' + clips.rating);
   console.log('');
 });

 console.log('');

 //3. Print titles of all short ( less than 3 minutes ) videos.
console.log('3.  Titles of all short ( less than 3 minutes ) videos.');
videos.forEach(function(clips) {
    if(clips.lengthInMinutes <= 3){
        console.log('Title: ' + clips.title);
    }
    
});
console.log('');

console.log('');

// 4. titles of all long ( greater than 20 minutes ) videos.
console.log('4. titles of all long ( greater than 20 minutes ) videos.');
 videos.forEach(function(clips) {
     if(clips.lengthInMinutes >= 20){
         console.log('Title: ' + clips.title);
         console.log('');

     }
 
 });

console.log('');

//5. Titles of all medium length videos.
console.log('5. Titles of all medium length videos.');

videos.forEach(function(clips){
    if(clips.lengthInMinutes <= 50 && clips.lengthInMinutes >= 3){
        console.log('Tilte: ' + clips.title);
        console.log('');
    }
});
console.log('');

//6.  Title of the longest video
console.log('6.  Ttitle of the longest video.');
videos.forEach(function (clips) {
    if(clips.lengthInMinutes >= 50){
        console.log('Title: '+ clips.title);
        console.log('');
    }

    
});
console.log('');

//7.  Titles of all "Educational" videos.
console.log('7. Titles of all "Educational" videos.');
videos.forEach(function(clips) {
    if(clips.category == 'Education'){
        console.log('Title: ' + clips.title);
        console.log('');
    }
});
console.log('');

//8. Titles of all videos with tag "Javascript"
console.log('8. Titles of all videos with tag "Javascript".');
videos.forEach(function(clips) {
    if(clips.tags.includes("javascript")){
    console.log( clips.title );
    };
    console.log('');
});
console.log('');

//9. Titles of all videos with HD feature.
console.log('9. Titles of all videos with HD feature');

videos.forEach(function(clips) {
    if(clips.features.includes("HD")){
        console.log('Title' + clips.title);
        console.log('');
    }
});


    console.log('');
//10. Titles of all videos uploaded today.
console.log('10. Titles of all videos uploaded today.');
console.log('');


videos.forEach(function(clips) {
    if(clips.uploadDate.getDay() === new Date().getDay()){
        console.log(clips.title);
        console.log('');
    }
    else{
    }
})
console.log('');

//11. Titles of all videos uploaded this week.
console.log('11. Titles of all videos uploaded this week.');
console.log('');

videos.forEach(function(clips){
    if (clips.uploadDate.getDay() === new Date().getDay()) {
        console.log(clips.title);
        console.log('');
    }

})
console.log('');

//12. Titles of all videos uploaded this month
console.log('12. Titles of all videos uploaded this month');

videos.forEach(function(clips){
    if (clips.uploadDate.getMonth() === new Date().getMonth()) {
        console.log(clips.title);
        console.log('');
    }
   
})


//13. Titles of all videos uploaded this year.
console.log('13. Titles of all videos uploaded this year');

videos.forEach(function(clips){
    if (clips.uploadDate.getFullYear() === new Date().getFullYear()) {
        console.log(clips.title);
        console.log('');
    }
   
})
console.log('');

//14. Sort the array in ascending order of number of views and print the titles.
console.log('14. Sort the array in ascending order of number of views and print the titles');
console.log('');
 videos.sort((a, b) =>  a.viewCount-b.viewCount).forEach(clips => {
    console.log(clips.title);
    console.log('');
     
 });
 console.log('');

 //15. Sort the array in ascending order of rating and print the titles.
 console.log('15. Sort the array in ascending order of rating and print the titles ')
  videos.sort((a, b) => a.rating - b.rating).forEach(clips => {
      console.log(clips.title);
      console.log('');
  });
  console.log('');
  console.log('');
  console.log('');











 







