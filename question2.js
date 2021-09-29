const getflags = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const flags=xhr.response;
        for(let f of flags) {
            console.log(f.flag);
        }
    };
    xhr.send();
};

getflags();