//confirms the current time of the user

const CurrentTime = new Date().toLocaleTimeString();

//Collection of objects that will be used to manipluate the display time later
const city = {
    "NewYork" :  document.getElementsByTagName('button')[0],
    "London" :  document.getElementsByTagName('button')[1],
    "Moscow" :  document.getElementsByTagName('button')[2],
    "Sydney" :  document.getElementsByTagName('button')[3],
    "EasterIsland" :  document.getElementsByTagName('button')[4]
  } 

//used to display the current local time to the user

const displayCurrentTime = document.getElementsByTagName('h2')[0];

displayCurrentTime.innerHTML = "Your local time is: "  + CurrentTime;


//function to calculate the current time of the selected city

function calcNewTime(offset) {

d = new Date();

utc = d.getTime()+(d.getTimezoneOffset()*60000);

newDate = new Date(utc + (3600000*offset));

return newDate.toLocaleTimeString();

}


//stores the current time of each city

const newYorkTime = calcNewTime(-5);

const londonTime = calcNewTime(+0);

const moscowTime = calcNewTime(+3);

const sydneyTime= calcNewTime(+11);

const easterIslandTime = calcNewTime(-5);


//changes content based on city selected


city.NewYork.onclick = function () {
document.getElementsByTagName('img')[0].src = "images/trump.jpg";
displayCurrentTime.innerHTML = "The time in New York is: " + newYorkTime;
};

city.London.onclick = function () {
    document.getElementsByTagName('img')[0].src = "images/boris.jpg";
    displayCurrentTime.innerHTML = "The time in London is: " + londonTime;
    };

    city.Moscow.onclick = function () {
        document.getElementsByTagName('img')[0].src = "images/putin.jpg";
        displayCurrentTime.innerHTML = "The time in Moscow is: " + moscowTime;
        };

        city.Sydney.onclick = function () {
            document.getElementsByTagName('img')[0].src = "images/australiaKangaroo.jpg";
            displayCurrentTime.innerHTML = "The time in Sydney is: " + sydneyTime;
            };

            city.EasterIsland.onclick = function () {
                document.getElementsByTagName('img')[0].src = "images/easterisland.jpg";
                displayCurrentTime.innerHTML = "The time on Easter Island is: " + easterIslandTime;
                };





