fetch("https://corona.lmao.ninja/v2/countries/Brazil")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("cases-population").innerHTML = data.population;
        document.getElementById("cases-cases").innerHTML = data.cases;
        document.getElementById("cases-active").innerHTML = data.active;
        document.getElementById("cases-deaths").innerHTML = data.deaths;
        document.getElementById("cases-tests").innerHTML = data.tests;
        document.getElementById("cases-recovered").innerHTML = data.recovered;
    })


    function setTopo(){
    $(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);
