"use strict";

//all the articles
const articles = [
    {
        id: 0,
        title: "16 000 avvisade vid gränsen - inresereglerna lättas",
        text: "Fram till nu har det varit svårt för danskar att ta sig över Öresundsbron till Malmö efter att gränsen hade stängts. Sverige lättar nu på dessa regler så länge man kan visa upp ett negativt covid-test.",
        paragraph: "",
        category: "brott",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 1,
        title: "Var är liket? Man stal sin döda mors kropp",
        text: "Sonen skulle ta ett sista farväl och fick kistan med sin döda mors kropp kört till sitt hem. När begravningsbyrån sedan hämtade kistan tillbaka upptäckte man att kistan var tom.",
        paragraph: "",
        category: "brott",
        justNu: true,
        image: "images/coffin_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 2,
        title: "Nu har domen kommit för 23-årig kvinna angående människohandel",
        text: "Rättegången angående storskalig prosititution har avslutats och nu har en kvinna och en man dömts för människohandel vid Malmö Tingsrätt. Båda ska efter avtjänat straff utvisas från Sverige.",
        paragraph: "",
        category: "brott",
        justNu: false,
        image: false,
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 3,
        title: "Påsklov i Malmö - i år digitalt",
        text: "Många barn står inför ett digitalt påsklov. Malmö stad satsar i år på digitala aktiviteter och i vissa fall även utomhusaktiviteter för barnen i Malmö.",
        paragraph: "",
        category: "underhållning",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 4,
        title: "Demonstrationer i Malmö - polisen nöjd med sin insats",
        text: "Demonstrationerna angående pandemin och relaterade restriktioner har varit lugnare än förväntat. Ett 30-tal personer avslägsnades.",
        paragraph: "",
        category: "brott",
        justNu: false,
        image: false,
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 5,
        title: "Trelleborgspalmen spårlöst försvunnen",
        text: "Natten till torsdagen försvann den 80-åriga palmen från Trelleborgs centralstation. Invånarna är upprörda över att en palm spårlöst kan försvinna utan att någon vet vart den tagit vägen.",
        paragraph: "Här har vi lite mer text för att testa",
        category: "brott",
        justNu: false,
        image: "images/palm_stockImage.jpg",
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 6,
        title: "Playstation 5 försenat",
        text: "Efterfrågan på Playstation 5 är fortsatt höga men ännu kan inte efterfrågan mötas av speltillverkarna. När nästa release blir vågar inte butikerna gå ut med.",
        paragraph: "",
        category: "teknik",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 7,
        title: "Har du koll på livslängden på dessa livsmedel?",
        text: "Hur länge håller egentligen honung? Kan vatten bli gammalt? Honung är faktiskt det enda livsmedelt som inte blir gammalt, det kan kristalliseras men kan överleva flera tusentals år i rätt miljö.",
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: "images/honey_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 8,
        title: "Månadens horoskop - så blir ditt kärleksliv i juni",
        text: "Ny månad, nya möjligheter! Har du fortfarande inte hittat kärleken? Frukta ej, vi kan hjälpa dig på traven!",
        paragraph: "",
        category: "underhållning",
        justNu: false,
        image: "images/zodiacs_stockImage.jpg",
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 9,
        title: "Därför ska du vara försiktig med hur du dödar en kackerlacka",
        text: "Visste du att en kackerlacka kan leva i flera veckor utan huvud? Se därför till att mosa hela kackerlackan! Honan förökar sig snabbt, efter befruktning tar det endast tre till fem veckor innan hon lägger 30-40 ägg som kläcks efter ett dygn.",
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 10,
        title: 'Rött kort för "jävla sopa" – Jag är rasande',
        text: "Anfallaren kritiserar SvFF kring utvisningen förra helgen och riskerar avstängning. Anfallaren fick en smäll mot ena foten under matchen, men fick inte med sig en frispark och skrek då ”jävla sopa” till domaren, vilket gjorde att han fick rött kort.",
        paragraph: "",
        category: "sport",
        justNu: false,
        image: false,
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 11,
        title: 'Edmans galna utspel: "Om tre år är Isak bättre än Haaland"',
        text: 'Alexander Isak kommer gå om Erling Braut Haaland i utvecklingen, menar Erik Edman. Isak kör på i Real Sociedad och under årets säsong har svensken noterats för tolv mål på 24 ligamatcher. Han har också haft rykten kring sig att Barcelona vill knyta till sig honom. "Hela Norge kommer kasta fryspizza på mig nu, men om 3 år är Alexander Isak en bättre spelare än honom!", skrev Edman.',
        paragraph: "",
        category: "sport",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 12,
        title: 'TV: Kulusevski bjuder Torino på mål i derbyt, ”totalt hjärnsläpp i ett sånt viktigt skede av matchen!”',
        text: "Dejan Kulusevski stod för en miss, som ledde fram till Torinos 2-1 mål mot Juventus i derbyt. Ett totalt hjärnsläpp av svensken, som kommer gräva ner sig i flera dagar. Derby della Mole är ett hett lokalderby i staden Torino.",
        paragraph: "",
        category: "sport",
        justNu: false,
        image: "images/soccer_stockImage.jpg",
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 13,
        title: 'HBK:s bragd satte storklubb i skräck: ”Det var något av de största skrällarna i svensk fotboll”',
        text: 'Halmstads BK slog ut Sporting CP i Uefa-cupen 2005. HBK var placerade i mitten av allsvenskan, medans Sporting kom från en final i Europa. Det var en jätteskräll för svensk fotboll, men som fick stora konsekvenser. Dåvarande tränaren och nuvarande tränaren för svenska landslaget Janne Andersson uttalade sig kring matchen: ”Det var kanske den största skrällen jag varit med om..”',
        paragraph: "",
        category: "sport",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 14,
        title: "Dahlin var vass när Buffalo vann",
        text: 'Ett vasst solomål av svensken gav ny seger till Buffalo. ”Det känns skönt” säger svensken i en intervju…',
        paragraph: "",
        category: "sport",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 15,
        title: "Test: Finchips som livar upp myskvällen",
        text: "I vårt test är den överlägset krispiga vinnaren en lövtunn spanjor med tryffelsmak.",
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 16,
        title: "Burrata - en ost för livsnjutare",
        text: "Mia Gahne: Fetthalten i en krämig burrata är inget för veklingar.",
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: "images/burrata_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 17,
        title: "Pågen får tillstånd att bygga ut - men tidsbegränsat till tio år",
        text: "Bolaget överväger att överklaga vissa av villkoren i tillståndet.",
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 18,
        title: "Ljudfantast i Malmö blev världskänd på sin hobby",
        text: "George Polychronidis bygger stereoförstärkare till kunder över hela världen.",
        paragraph: "",
        category: "teknik",
        justNu: false,
        image: "images/amplifier_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 19,
        title: "Unik Ben & Jerry's-butik öppnar i Lund",
        text: `"Studenter gillar Ben & Jerry's, så jag tror Lund är en perfekt stad".`,
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: false,
        mostViewed: true,
        prenum: true,
        video: false
    },
    // {
    //     id: 20,
    //     title: "First murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: false,
    //     image: "",
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    // },
    {
        id: 21,
        title: 'Tareq Taylor får inte medverka i "Masked singer"',
        text: 'Tareq Taylor fick tacka nej till erbjudandet om att vara med i "Masked Singer". Han avslöjer att det är SVT som lag bakom beslutet.',
        paragraph: "",
        category: "underhållning",
        justNu: false,
        image: "images/masqerade_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    // {
    //     id: 22,
    //     title: "Second murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: true,
    //     image: false,
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    
    // },
    // {
    //     id: 23,
    //     title: "Third murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: true,
    //     image: "",
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    // },
    {
        id: 24,
        title: 'Pearl Jam släpper liveinspelningar',
        text: 'Coronapandemin har slagit hårt mot musikbranschen. Pearl Jam är inget undantag - bandet fick skjuta upp den planerade turneringen. För fansen finns det dock ett litet tröstplåster: Bandet släpper nu 186 liveinspelningar.',
        paragraph: "",
        category: "underhållning",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 25,
        title: "Så spelas matcherna i hockey-VM 2021",
        text: "Hockey-VM 2021 i Riga har sin primiär den 21 maj. Här har vi sammanfattat all information kring årets event",
        paragraph: "",
        category: "sport",
        justNu: false,
        image: "images/hockey_stockImage.jpg",
        mostViewed: false,
        prenum: true,
        video: false
    },
    // {
    //     id: 26,
    //     title: "Fourth murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: true,
    //     image: "",
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    // },
    // {
    //     id: 27,
    //     title: "Fifth murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: true,
    //     image: false,
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    // },
    {
        id: 28,
        title: "IBS-mage: Så kan du lugna ner din mage",
        text: 'Vi har tagit fram de 10 bästa metoderna som kan hjälpa dig att lugna ner din mage. Läs mer om hur dessa metoder har hjälpt ett flertal personer redan.',
        paragraph: "",
        category: "mat & hälsa",
        justNu: false,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    {
        id: 29,
        title: "Pokemon Snap får en revival",
        text: "Många minns Pokemon Snap ur barndomsdagar där spelet för N64-konsolen fick spelaren att agera fotograf i en värld dominerad av Pokemon. Spelet från 1999 får nu en remake och vi har testat spelet.",
        paragraph: "",
        category: "underhållning",
        justNu: false,
        image: false,
        mostViewed: true,
        prenum: true,
        video: false
    },
    {
        id: 30,
        title: "Spanien hävdar restriktioner - hela landet i feststämning",
        text: "Människor gick ut för att fira den första helgen efter att restriktionerna hade hävts. Polisen fick avhysa festsugna från gatorna.",
        paragraph: "",
        category: "brott",
        justNu: true,
        image: false,
        mostViewed: false,
        prenum: true,
        video: false
    },
    // {
    //     id: 31,
    //     title: "Sixth murderNews",
    //     text: "some ingress for the murder.",
    //     paragraph: "the text",
    //     category: "brott",
    //     justNu: true,
    //     image: "",
    //     mostViewed: true,
    //     prenum: false,
    //     video: false
    // },
];

//the categories for the navigation bar
const categories = ["brott", "sport", "underhållning", "mat & hälsa", "teknik"];

//the months and weekdays for the date
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

const days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

//get the current date for the newsPage
let currentDate = new Date();
//date is made into a string and split it by the comma
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