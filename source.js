const leeftijd = 21;
const man_vrouw = true
const age = 18;
const bob = false;
const isFemale = true;
const firstname = "peter";
const totalAmount = 100;

if (leeftijd > age && leeftijd < 25) {
    console.log("gast is tussen de 18 en 25");
    console.log("gast krijgt 50% korting!")
    if (!bob) {
        console.log('gast mag niet rijden');
        if (firstname == "Sarah" || firstname == "Bram") {
            console.log("gast heeft recht op een gratis biertje op deze feestelijke dag.");
        } else {

            if (totalAmount === 25) {
                console.log('klant krijgt gratis bitterballen!');
            } else if (totalAmount === 50) {
                console.log('klant krijgt gratis nachos!');
            } else if (totalAmount === 100) {
                console.log('klant krijgt gratis champange!');
            } else {
                console.log('bij 25, 50 en 100 euro krijg je een bitterballen , nachos of champange');
            }

        }
    } else {
        console.log('gast is bob en mag rijden');
    }
} else {
    console.log('gast is te jong');
}