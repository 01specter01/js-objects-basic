//Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.
//1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.

////////////////////////////////////////////////////////////////////////////////////////////
const user1 = {
    vornamen: "Raja",
    nachnamen: "Underwood",
    email: "pellentesque.tincidunt.tempus@outlook.org",
    Hobby1: "Musik",
    Hobby2: "IT",
    Hobby3: "Sport",
};
const user2 = {
    vornamen: "Owen",
    nachnamen: "Bennett",
    email: "aliquet@protonmail.net",
    Hobby1: "Programmieren",
    Hobby2: "nachrichten",
    Hobby3: "Aktien",
};
const user3 = {
    vornamen: "Amery",
    nachnamen: "Conway",
    email: "erat.neque.non@google.ca",
    Hobby1: "Reisen",
    Hobby2: "Festivals",
    Hobby3: "",
};
const user4 = {
    vornamen: "Lillian",
    nachnamen: "Clay",
    email: "adipiscing.elit@aol.couk",
    Hobby1: "Autos",
    Hobby2: "IT",
    Hobby3: "",
};
const user5 = {
    vornamen: "Nicholas",
    nachnamen: "Berg",
    email: "nullam.feugiat@yahoo.net",
    Hobby1: "essen",
    Hobby2: "",
    Hobby3: "",
};
console.log("Aufgabe1");

//2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
//"Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält newsletter zu den Themen Sport und Kochen.
//Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält newsletter zu den Themen Musik, IT und Reisen.
////////////////////////////////////////////////////////////////////////////////////////////

console.log("Aufgabe2");
console.log(
    user1.vornamen,
    user1.nachnamen,
    "ist mit der Adresse",
    user1.email,
    "regestriert und erhält newsletter zu den Themen",
    user1.Hobby1,
    "und",
    user1.Hobby2,
    "."
);
//Zusatzaufgaben:
//3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
////////////////////////////////////////////////////////////////////////////////////////////
console.log("Aufgabe3");
console.log(user5.vornamen, user5.nachnamen, "hat keine Hobby's");

//4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")
////////////////////////////////////////////////////////////////////////////////////////////
console.log("Aufgabe4");

user5("regestrierDate");
console.log(user5);

//Raja Underwood,pellentesque.tincidunt.tempus@outlook.org, Musik | IT | Sport,
//Owen Bennett,aliquet@protonmail.net, Programmieren | Nachrichten | Aktien,
//Amery Conway,erat.neque.non@google.ca, Reisen | Festivals,
//Lillian Clay,adipiscing.elit@aol.couk, Autos | IT,
//Nicholas Berg,nullam.feugiat@yahoo.net, Essen
