"use strict";

//all the articles
const articles = [
    {
        title: "16 000 avvisade vid gränsen - inresereglerna lättas",
        text: "Fram till nu har det varit svårt för danskar att ta sig över Öresundsbron till Malmö efter att gränsen hade stängts. Sverige lättar nu på dessa regler så länge man kan visa upp ett negativt covid-test.",
        category: "Sverige",
        justNu: false
    },
    {
        title: "Var är liket? Man stal sin döda mors kropp",
        text: "Sonen skulle ta ett sista farväl och fick kistan med sin döda mors kropp kört till sitt hem. När begravningsbyrån sedan hämtade kistan tillbaka upptäckte man att kistan var tom.",
        category: "Brott",
        justNu: false
    },
    {
        title: "Nu har domen kommit för 23-årig kvinna angående människohandel",
        text: "Rättegången angående storskalig prosititution har avslutats och nu har en kvinna och en man dömts för människohandel vid Malmö Tingsrätt. Båda ska efter avtjänat straff utvisas från Sverige.",
        category: "Brott",
        justNu: false
    },
    {
        title: "Påsklov i Malmö - i år digitalt",
        text: "Många barn står inför ett digitalt påsklov. Malmö stad satsar i år på digitala aktiviteter och i vissa fall även utomhusaktiviteter för barnen i Malmö.",
        category: "Sverige",
        justNu: false
    },
    {
        title: "Demonstrationer i Malmö - polisen nöjd med sin insats",
        text: "Demonstrationerna angående pandemin och relaterade restriktioner har varit lugnare än förväntat. Ett 30-tal personer avslägsnades.",
        category: "Sverige",
        justNu: false
    },
    {
        title: "Trelleborgspalmen spårlöst försvunnen",
        text: "Natten till torsdagen försvann den 80-åriga palmen från Trelleborgs centralstation. Invånarna är upprörda över att en palm spårlöst kan försvinna utan att någon vet vart den tagit vägen.",
        category: "Sverige",
        justNu: false
    },
    {
        title: "Playstation 5 försenat",
        text: "Efterfrågan på Playstation 5 är fortsatt höga men ännu kan inte efterfrågan mötas av speltillverkarna. När nästa release blir vågar inte butikerna gå ut med.",
        category: "Teknik",
        justNu: false
    },
    {
        title: "Har du koll på livslängden på dessa livsmedel?",
        text: "Hur länge håller egentligen honung? Kan vatten bli gammalt? Honung är faktiskt det enda livsmedelt som inte blir gammalt, det kan kristalliseras men kan överleva flera tusentals år i rätt miljö.",
        category: "Mat & Hälsa",
        justNu: false
    },
    {
        title: "Månadens horoskop - så blir ditt kärleksliv i maj",
        text: "Ny månad, nya möjligheter! Har du fortfarande inte hittat kärleken? Frukta ej, vi kan hjälpa dig på traven!",
        category: "Underhållning",
        justNu: false
    },
    {
        title: "Därför ska du vara försiktig med hur du dödar en kackerlacka",
        text: "Visste du att en kackerlacka kan leva i flera veckor utan huvud? Se därför till att mosa hela kackerlackan! Honan förökar sig snabbt, efter befruktning tar det endast tre till fem veckor innan hon lägger 30-40 ägg som kläcks efter ett dygn.",
        category: "Hushåll",
        justNu: false
    },
    {
        title: 'Rött kort för "jävla sopa" – Jag är rasande',
        text: "Anfallaren kritiserar SvFF kring utvisningen förra helgen och riskerar avstängning. Anfallaren fick en smäll mot ena foten under matchen, men fick inte med sig en frispark och skrek då ”jävla sopa” till domaren, vilket gjorde att han fick rött kort.",
        category: "Sport",
        justNu: false
    },
    {
        title: 'Edmans galna utspel: "Om tre år är Isak bättre än Haaland"',
        text: 'Alexander Isak kommer gå om Erling Braut Haaland i utvecklingen, menar Erik Edman. Isak kör på i Real Sociedad och under årets säsong har svensken noterats för tolv mål på 24 ligamatcher. Han har också haft rykten kring sig att Barcelona vill knyta till sig honom. "Hela Norge kommer kasta fryspizza på mig nu, men om 3 år är Alexander Isak en bättre spelare än honom!", skrev Edman.',
        category: "Sport",
        justNu: false
    },
    {
        title: 'TV: Kulusevski bjuder Torino på mål i derbyt, ”totalt hjärnsläpp i ett sånt viktigt skede av matchen!”',
        text: "Dejan Kulusevski stod för en miss, som ledde fram till Torinos 2-1 mål mot Juventus i derbyt. Ett totalt hjärnsläpp av svensken, som kommer gräva ner sig i flera dagar. Derby della Mole är ett hett lokalderby i staden Torino.",
        category: "Sport",
        justNu: false
    },
    {
        title: 'HBK:s bragd satte storklubb i skräck: ”Det var något av de största skrällarna i svensk fotboll”',
        text: 'Halmstads BK slog ut Sporting CP i Uefa-cupen 2005. HBK var placerade i mitten av allsvenskan, medans Sporting kom från en final i Europa. Det var en jätteskräll för svensk fotboll, men som fick stora konsekvenser. Dåvarande tränaren och nuvarande tränaren för svenska landslaget Janne Andersson uttalade sig kring matchen: ”Det var kanske den största skrällen jag varit med om..”',
        category: "Sport",
        justNu: false
    },
    {
        title: "Dahlin var vass när Buffalo vann",
        text: 'Ett vasst solomål av svensken gav ny seger till Buffalo. ”Det känns skönt” säger svensken i en intervju…',
        category: "Sport",
        justNu: false
    },
    {
        title: "Test: Finchips som livar upp myskvällen",
        text: "I vårt test är den överlägset krispiga vinnaren en lövtunn spanjor med tryffelsmak.",
        category: "Mat & Hälsa",
        justNu: false
    },
    {
        title: "Burrata - en ost för livsnjutare",
        text: "Mia Gahne: Fetthalten i en krämig burrata är inget för veklingar.",
        category: "Mat & Hälsa",
        justNu: false
    },
    {
        title: "Pågen får tillstånd att bygga ut - men tidsbegränsat till tio år",
        text: "Bolaget överväger att överklaga vissa av villkoren i tillståndet.",
        category: "Ekonomi",
        justNu: false
    },
    {
        title: "Ljudfantast i Malmö blev världskänd på sin hobby",
        text: "George Polychronidis bygger stereoförstärkare till kunder över hela världen.",
        category: "Teknik",
        justNu: false
    },
    {
        title: "Unik Ben & Jerry's-butik öppnar i Lund",
        text: `"Studenter gillar Ben & Jerry's, så jag tror Lund är en perfekt stad".`,
        category: "Ekonomi",
        justNu: false
    }
];

//the categories for the navigation bar
const categories = ["Nyheter", "Sport", "Underhållning", "Mat & Hälsa", "Teknik"];

//the months and weekdays for the date
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

const days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

//get the current date for the newsPage
let currentDate = new Date();
//date is an object, so I make it into a string and split it by the comma
let currentDateString = currentDate.toDateString();
currentDateString = currentDateString.split(" ");
let currentWeekDay = currentDateString[0];
let currentMonth = currentDate.getMonth();
currentMonth = months[currentMonth];
let currentDay = currentDateString[2];
let currentYear = currentDateString[3];

switch(currentWeekDay) {
    case "Mon":
        currentWeekDay = days[0];
        break;
    case "Tue":
        currentWeekDay = days[1];
        break;
    case "Wed":
        currentWeekDay = days[2];
        break;
    case "Thu":
        currentWeekDay = days[3];
        break;
    case "Fri":
        currentWeekDay = days[4];
        break;
    case "Sat":
        currentWeekDay = days[5];
        break;
    case "Sun":
        currentWeekDay = days[6];
        break;
    case "default":
        currentWeekDay = "Date unavailable";
        break;
}