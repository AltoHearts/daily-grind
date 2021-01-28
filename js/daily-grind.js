/*
What W=we need to change: 

    Day of week - day
    Coffee Name - name
    Coffee Pic - pic
    alt tag - alt
    Coffee Description - desc
    Color for Coffee - color 
*/


let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//alert("Hello there!");

if(urlParams.has('day')) { //use query string
   myDay = urlParams.get('day')
   myDay = parseInt(myDay);
}else{ //use date object
    myDay = myDate.getDay();
}


function coffeeTemplate(coffee){
    let myReturn = "";
    //myReturn for index.html

    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}.</strong> ${coffee.promo}
   </p>

<p><span>${coffee.name} is </span>${coffee.desc}</p>

<p><span>Enjoy ${coffee.name} with our </span> Polaroid iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free Austin.</p>

    `;

    //myReturn for test.hmtl

   /* myReturn = `       
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> 
    ${coffee.day}'s daily coffee special is 
    <strong>${coffee.name}</strong>, </class="feature">${coffee.name}
    ${coffee.desc}
    </p>
    `; */

    return myReturn;
}

switch(myDay){
    case 0: 
    today = "Sunday";

    coffee = {
        color: "#DEB887",
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A pic of a bubble tea",
        day: "Sunday",
        promo: `Because nothings better than sucking up sticky orbs of tappioca!`,
        desc: `kickstarter vice franzen cloud bread photo booth brunch gochujang health goth gentrify viral selvage crucifix hexagon roof party fanny pack.`
    };
break;

    case 1: 
    today = "Monday";

    coffee = {
        color: "#FF7518",
        name: "Pumpkin Spice",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A pic of a Pumpking Spice Latte",
        day: "Monday",
        promo: `Which makes us wish it was always Fall, as this is one of our top sellers!`,
        desc: `Gluten-free selfies normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan, single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn readymade Tumblr wayfarers ethical.`
    };
break;

case 2: 
    today = "Tuesday";

    coffee = {
        color: "#9c6c4a",
        name: "Caramel Latte",
        pic: "images/caramel-latte.jpg",
        alt: "A pic of a caramel latte",
        day: "Tuesday",
        promo: `Which makes us want to go out and live a latte! LOL`,
        desc: `pinterest thundercats dreamcatcher cornhole DIY you probably haven't heard of them schlitz ethical lyft.`
    };
break;

    case 3: 
        today = "Wednesday";

        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            promo: `Some days you just need the drip!`,
            desc: `heard of them poke health goth, sriracha four loko affogato vice food truck typewriter drinking vinegar cray vape readymade twee selfies.`
        };
    break;

    case 4: 
    today = "Thursday";

    coffee = {
        color: "#7b4c3c",
        name: "Cold Brew",
        pic: "images/cold-brew.jpg",
        alt: "A pic of a cold brew coffee",
        day: "Thursday",
        promo: `It's almost as icey cold as your heart!`,
        desc: `Waistcoat palo santo flannel, flexitarian echo park photo booth street art lyft freegan 3 wolf moon.`
    };
break;

case 5: 
    today = "Friday";

    coffee = {
        color: "#ffd59a",
        name: "Frappaccino",
        pic: "images/frappaccino.jpg",
        alt: "A pic of a frappaccino",
        day: "Friday",
        promo: `Get it with whipcream so you can whip up your dreams!`,
        desc: `Lomo glossier yr art party ramps bitters bicycle rights selvage. Irony scenester aesthetic master cleanse, gastropub YOLO shoreditch williamsburg heirloom leggings sustainable kitsch.`
    };
break;

case 6: 
    today = "Saturday";

    coffee = {
        color: "#2e1503",
        name: "Mocha",
        pic: "images/mocha.jpg",
        alt: "A pic of a mocha",
        day: "Saturday",
        promo: `Chocolate in your coffee with mocha your day!`,
        desc: `Schlitz fingerstache meggings single-origin coffee beard pop-up typewriter gentrify jean shorts squid succulents authentic slow-carb seitan fam.`
    };
break;

}



console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

document.getElementsByClassName("coffee-highlight").style.color = coffee.color;


//alert("hi, it's " + today + ". I'm in another file now!");
