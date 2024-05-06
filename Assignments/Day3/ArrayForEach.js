// assignmnet for for each statement how to handle in objects
const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    // Add more movies as needed
   ];

   oscarMovies.forEach(function(movies,index,array){
            // console.log(movies.title);
            // console.log(movies.year);
            // console.log(index);
            // console.log(array);

            console.log ("Index: [" + index  +"], Title: [" + movies.title + "], Movie: [ " + array + "]");

            });

        //Use a traditional `for` loop to iterate over the `oscarMovies` array.

    for (var i = 0 ; i<oscarMovies.length;i++)
    {
        console.log ("Index: [" + i  +"], Title: [" + oscarMovies[0] + "], Movie: [ " + oscarMovies + "]");
    }