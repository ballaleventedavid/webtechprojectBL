
const cel = Math.floor(Math.random() * 1000001);
let tippek = 0;
let talalat = false;

while (tippek < 20 && !talalat) {
    tippek++;
    const tipp = prompt(`${tippek}. tipp: Írd be a számodat (0-1000000): `);
    const szam = parseInt(tipp, 10);

    if (isNaN(szam)) {
        console.log("Érvénytelen bemenet! Kérlek, számot adj meg.");
        tippek--;
        continue;
    }

    if (szam === cel) {
        console.log(`Gratulálok, ${tippek} lépésből eltaláltad!`);
        talalat = true;
    } else if (szam > cel) {
        console.log(`${tippek}. tipp nem talált: A megoldás kisebb.`);
    } else {
        console.log(`${tippek}. tipp nem talált: A megoldás nagyobb.`);
    }
}

if (!talalat) {
    console.log(`Sajnos ez most nem sikerült! A keresett szám a ${cel} volt.`);
}