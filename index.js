(() => {
"use strict";
const CSS = `
:root{color-scheme:light;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;scroll-behavior:smooth}
*{box-sizing:border-box}body{margin:0;color:#152b2b;background:#f7faf8}a{color:inherit}button,a{touch-action:manipulation}
header{position:sticky;top:0;z-index:5;background:#fffefcf0;backdrop-filter:blur(14px);border-bottom:1px solid #dfe9e4}
.nav{max-width:1160px;margin:auto;min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:0 24px}
.brand{font-weight:850;letter-spacing:-.04em;font-size:1.45rem;text-decoration:none;color:#164f48}
nav{display:flex;gap:20px;flex-wrap:wrap}nav a{font-size:.9rem;text-decoration:none;color:#31534f}nav a:hover{text-decoration:underline}
.hero{background:linear-gradient(120deg,#0c3738e8,#146b5eaa),linear-gradient(35deg,#235c52,#87a77e);color:white;min-height:480px;display:flex;align-items:center}
.wrap{width:min(100% - 48px,1100px);margin:auto}
.hero .wrap{padding:90px 0}.eyebrow{text-transform:uppercase;letter-spacing:.18em;font-size:.8rem;font-weight:750}
h1{font-size:clamp(3.8rem,11vw,8rem);line-height:1;margin:16px 0;letter-spacing:-.065em}
.hero p{font-size:clamp(1.1rem,2vw,1.45rem);max-width:660px;line-height:1.6}
.cta{display:inline-block;margin-top:18px;background:#f4e5bc;color:#143b38;text-decoration:none;font-weight:750;padding:15px 22px;border-radius:9px}
section{padding:86px 0;scroll-margin-top:72px}section:nth-of-type(2n){background:#edf4f0}
h2{font-size:clamp(2rem,4vw,3rem);letter-spacing:-.045em;margin:0 0 20px}h3{margin:0 0 10px}
.lead{max-width:760px;font-size:1.13rem;line-height:1.8;color:#49635f}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:30px}
.card{background:#fff;border:1px solid #dce9e3;border-radius:16px;padding:28px;box-shadow:0 8px 28px #123a3010}
.card p{line-height:1.7;color:#4c625d}.card a{font-weight:700;color:#17685e}
.meta{font-size:.78rem;text-transform:uppercase;letter-spacing:.1em;color:#407b6c;font-weight:800}
footer{background:#102d2b;color:#e7f3ed;padding:55px 0}footer a{color:#b8e4d6}
.foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}small{color:#b4c8c1}
@media(max-width:750px){.nav{align-items:flex-start;flex-direction:column;padding:17px 24px;gap:12px}nav{gap:12px}.hero{min-height:400px}.grid{grid-template-columns:1fr}section{padding:62px 0}}
`;
const ITEMS = [
["Pumppulahti","Vehreä ulkoilu- ja virkistysalue, jossa voi nauttia rauhallisesta kävelystä ja piknikistä."],
["Pyhän Katariinan kirkko","Keskiaikainen kivikirkko Kirkkojärven läheisyydessä. Kirkon historia ulottuu 1400-luvulle."],
["Lepinjärvi","Luonto- ja kulttuuripolkuja sekä lintujen tarkkailuun sopivia ympäristöjä."],
["Funkkisarkkitehtuuri","Karjaan kaupunkikuvaa rikastuttavat arkkitehti Hilding Ekelundin funktionalistiset rakennukset."],
["Rautatieasema","Karjaan merkitys liikenteen solmukohtana kasvoi 1800-luvun lopulta lähtien."],
["Kulttuurielämä","Paikallisia näyttelyitä, esityksiä ja tapahtumia ympäri vuoden."]
];
function element(tag,attrs={},children=[]){const e=document.createElement(tag);for(const [k,v] of Object.entries(attrs)){if(k==="text")e.textContent=v;else if(k==="class")e.className=v;else e.setAttribute(k,v)}for(const c of children)e.append(c);return e}
function section(id,title,lead){const s=element("section",{id});const w=element("div",{class:"wrap"});w.append(element("h2",{text:title}),element("p",{class:"lead",text:lead}));s.append(w);document.body.append(s);return w}
const style=element("style",{text:CSS});document.head.append(style);
document.title="Karjaa – Historiaa, elämää ja tapahtumia";
const header=element("header"),nav=element("div",{class:"nav"}),brand=element("a",{href:"#alku",class:"brand",text:"KARJAA"}),links=element("nav",{"aria-label":"Päävalikko"});
for(const [name,id] of [["Etusivu","alku"],["Tutustu","tutustu"],["Nähtävyydet","nahtavyydet"],["Ajankohtaista","ajankohtaista"],["Linkit","linkit"]])links.append(element("a",{href:"#"+id,text:name}));
nav.append(brand,links);header.append(nav);document.body.append(header);
const hero=element("div",{class:"hero",id:"alku"}),hw=element("div",{class:"wrap"});
hw.append(element("div",{class:"eyebrow",text:"Raasepori · Länsi-Uusimaa"}),element("h1",{text:"Karjaa"}),element("p",{text:"Historiaa, kulttuuria ja elämää luonnon keskellä. Tutustu Karjaaseen – rautateiden risteyskohtaan ja elävään paikallisyhteisöön."}),element("a",{href:"#tutustu",class:"cta",text:"Tutustu Karjaaseen →"}));hero.append(hw);document.body.append(hero);
section("tutustu","Tervetuloa Karjaalle","Karjaa on osa Raaseporia. Se tunnetaan hyvistä liikenneyhteyksistään, kulttuuristaan, arkkitehtuuristaan ja vehreistä maisemistaan. Kaupunginosan historia näkyy edelleen katukuvassa.");
const places=section("nahtavyydet","Näe ja koe","Karjaalla yhdistyvät paikallishistoria, luonto ja kaupunkikulttuuri.");
const cards=element("div",{class:"grid"});for(const [name,description] of ITEMS)cards.append(element("article",{class:"card"},[element("h3",{text:name}),element("p",{text:description})]));places.append(cards);
const current=section("ajankohtaista","Ajankohtaista","Ajankohtaiset tapahtumat ja tiedotteet avautuvat suoraan niiden virallisissa lähteissä. Sivusto ei väitä näyttävänsä automaattisesti päivittyvää uutisvirtaa.");
const cg=element("div",{class:"grid"});
for(const [label,title,desc,url] of [
["TAPAHTUMAT","Raaseporin tapahtumakalenteri","Katso tulevat tapahtumat, näyttelyt ja paikalliset tilaisuudet.","https://tapahtumat.raasepori.fi/fi-FI"],
["KAUPUNKI","Raaseporin tiedotteet","Tutustu kaupungin uusimpiin uutisiin, palveluihin ja ilmoituksiin.","https://www.raseborg.fi/fi/"],
["MATKAILU","Visit Raseborg: Karjaa","Lue lisää Karjaan kohteista, luonnosta ja kulttuurista.","https://visitraseborg.fi/fi/nae-koe/kaupunginosat-kylat/karjaa/"]
])cg.append(element("article",{class:"card"},[element("div",{class:"meta",text:label}),element("h3",{text:title}),element("p",{text:desc}),element("a",{href:url,target:"_blank",rel:"noopener noreferrer",text:"Avaa lähde ↗"})]));current.append(cg);
const resources=section("linkit","Tietoa ja lähteitä","Luotettavaa lisätietoa Karjaasta ja sen historiasta.");
const rg=element("div",{class:"grid"});
for(const [title,url] of [["Museovirasto – Meidän Karjaa","https://www.museovirasto.fi/en/meidan-karjaa"],["Raaseporin kaupunki","https://www.raseborg.fi/fi/"],["Karjaa – Visit Raseborg","https://visitraseborg.fi/fi/nae-koe/kaupunginosat-kylat/karjaa/"]])rg.append(element("article",{class:"card"},[element("a",{href:url,target:"_blank",rel:"noopener noreferrer",text:title+" ↗"})]));resources.append(rg);
const footer=element("footer"),fw=element("div",{class:"wrap foot"});
fw.append(element("div",{},[element("h3",{text:"Karjaa"}),element("small",{text:"Itsenäinen Karjaa-aiheinen verkkosivusto · Ei Raaseporin kaupungin virallinen palvelu."})]),element("div",{},[element("p",{text:"Daniel Aspelin"}),element("a",{href:"https://github.com/DanielAspelin/Karjaa",text:"Lähdekoodi GitHubissa"})]));footer.append(fw);document.body.append(footer);
})();
