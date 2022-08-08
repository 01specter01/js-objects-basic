//Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.
//1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.

////////////////////////////////////////////////////////////////////////////////////////////
const User1 = {
    Vornamen: "Raja",
    Nachnamen: "Underwood",
    [Email - Adresse]: "pellentesque.tincidunt.tempus@outlook.org",
    Hobby1: "Musik",
    Hobby2: "IT",
    Hobby3: "Sport",
};
const User2 = {
    Vornamen: "Owen",
    Nachnamen: "Bennett",
    [Email - Adresse]: "aliquet@protonmail.net",
    Hobby1: "Programmieren",
    Hobby2: "Nachrichten",
    Hobby3: "Aktien",
};
const User3 = {
    Vornamen: "Amery",
    Nachnamen: "Conway",
    [Email - Adresse]: "erat.neque.non@google.ca",
    Hobby1: "Reisen",
    Hobby2: "Festivals",
    Hobby3: "",
};
const User4 = {
    Vornamen: "Lillian",
    Nachnamen: "Clay",
    [Email - Adresse]: "adipiscing.elit@aol.couk",
    Hobby1: "Autos",
    Hobby2: "IT",
    Hobby3: "",
};
const User5 = {
    Vornamen: "Nicholas",
    Nachnamen: "Berg",
    [Email - Adresse]: "nullam.feugiat@yahoo.net",
    Hobby1: "Essen",
    Hobby2: "",
    Hobby3: "",
};
console.log("Aufgabe1");
//2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
//"Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält Newsletter zu den Themen Sport und Kochen.
//Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält Newsletter zu den Themen Musik, IT und Reisen.

////////////////////////////////////////////////////////////////////////////////////////////
console.log("Aufgabe2");
//Zusatzaufgaben:
//3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
//4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")
//Raja Underwood,pellentesque.tincidunt.tempus@outlook.org, Musik | IT | Sport,
//Owen Bennett,aliquet@protonmail.net, Programmieren | Nachrichten | Aktien,
//Amery Conway,erat.neque.non@google.ca, Reisen | Festivals,
//Lillian Clay,adipiscing.elit@aol.couk, Autos | IT,
//Nicholas Berg,nullam.feugiat@yahoo.net, Essen
