const getdetails = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const name=xhr.response;
        const region=xhr.response;
        const subregion=xhr.response;
        const population=xhr.response;
        for(let n of name) {
         console.log(n.name);
        }
        for(let r of region) {
            console.log(r.region);
           }
           for(let sr of subregion) {
            console.log(sr.subregion);
           }
           for(let p of population) {
            console.log(p.population);
           }
    };
    xhr.send();
};

getdetails();