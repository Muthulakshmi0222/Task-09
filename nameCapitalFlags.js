const getBlogs=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
        blogs.forEach(function(countries){
            console.log(countries.name);
            console.log(countries.capital);
            console.log(countries.flag);
        });
    };
    xhr.send();
    };
    getBlogs();
    