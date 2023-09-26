import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="Title">News Courier Daily</h1>
      <Feed>
        <News
          title="Bitcoin in de inflatierollercoaster, KPMG koopt en meer nieuws"
          link="https://www.crypto-insiders.nl/nieuws/bitcoin/bitcoin-in-de-inflatierollercoaster-kpmg-koopt-en-meer-nieuws/"
          description="Het was de afgelopen week weer enerverend in crypto-land! In het crypto nieuws deze week zagen we nieuws over grote bedrijven, de Europese Unie en inflatie voorbij komen. In dit nieuwsoverzicht lees je een overzicht met het belangrijkste nieuws. Inflatie zorgt voor bitcoin stijging, maar ook daling Te beginnen met wat bitcoin nieuws. Deze week werden de inflatiecijfers voor januari bekendgemaakt voor zowel Nederland als andere landen. De cijfers die het meeste impact hadden op de bitcoin koers waren die uit de Verenigde Staten. Daar steeg de inflatie in januari tot maar liefst 7,5%. Dit zorgde in eerste instantie voor een aardige stijging. Bitcoin is immers een zogenoemde inflatie hedge die door zijn schaarste mogelijk bescherming kan bieden tegen de waardevermindering van geld. Maar niet veel later kwam het besef dat de Amerikaanse centrale bank mogelijk door de inflatie de rentepercentages zal gaan verhogen. Deze onzekerheid zorgde voor een correctie naar beneden. KPMG, Tesla, BlackRock, Uber en… Bitcoin! Dan nieuws omtrent een aantal grote namen. Wat betreft adoptie was het namelijk een behoorlijk positieve week voor bitcoin en crypto in het algemeen. Zo werd duidelijk dat de Canadese tak van het wereldberoemde accountancybedrijf KPMG bitcoin en ethereum (ETH) aan zijn balans heeft toegevoegd. Later in de week maakte Tesla bekend eind 2021 nog $2 miljard aan bitcoins te hebben. Kortom, het lijkt voor nu stevig vast te houden aan zijn BTC. Op 10 februari werd bekend dat een andere grote naam van plan is crypto te betreden, namelijk ‘s werelds grootste vermogensbeheerder BlackRock. Het wil crypto-diensten gaan aanbieden aan klanten. Uber, een alternatieve taxidienst, volgde de vermogensbeheerder niet veel later in zijn voetsporen. Digitale euro in samenwerking met Ripple? Ook op politiek vlak was er weer interessant nieuws. Zo wil de Europese Commissie in 2023 een wet op tafel hebben liggen die de fundatie moet leggen voor een digitale euro. Ripple (XRP) zal hieraan een steentje bij gaan dragen. Wat betreft cryptocurrencies die niet door de overheid worden gecontroleerd was er minder positief nieuws. Dit keer liet de gouverneur van de Hongaarse centrale bank weten een algeheel verbod op crypto trading en mining te steunen. Eerder stelde een andere Europese toezichthouder al zo’n verbod voor. Of het ooit zover gaat komen is nog maar de vraag. Gedecentraliseerde cryptocurrencies kunnen namelijk met geen mogelijkheid gecontroleerd worden."
          author="Timo Bult"
        />
        <News
          title="Musk pushes the boundaries in Tesla autonomous campaign"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          description="Tesla Chief Executive Elon Musk often touts the arrival of completely autonomous vehicles as imminent, but exactly how close that future is for the electric automaker remains murky."
          image="https://scx1.b-cdn.net/csz/news/tmb/2021/tesla.jpg"
        />
        <News
          title="¿Cómo es la Crew Dragon de SpaceX?"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          description="Si has oído hablar de Elon Musk y te gustan los viajes al espacio, entonces habrás oído hablar de SpaceX, un mega proyecto aeroespacial que está siendo el gran protagonista de esta clase de viajes de la mano del fundador de Tesla. Con ello, por su parte, también nació lo que se denominó como ‘Crew Dragon’, la cápsula para la misión que se lleva a cabo desde la nave del Dragon 2. Pero, ¿cómo es y qué consiste? SpaceX tiene con ‘Crew Dragon’ un proyecto histórico En 2020, la Administración Nacional de Aeronáutica y Espacio (NASA), junto con SpaceX , la empresa del magnate Elon Musk, lanzaron al espacio una nave que tuvo como destino la Estación Espacial Internacional. En su caso fue con la nave ‘Crew Dragon’, que marcó un hito histórico con el que se buscaba encabezar el inicio de los viajes comerciales al espacio. Con todo, hablamos de Space X como la empresa estadounidense de transporte aeroespacial fundada por el magnate de Tesla (y otros), Elon Musk. Hasta la llegada del ‘Crew Dragon’, el proyecto más importante de SpaceX hasta entonces resultó ser es el cohete Falcon Heavy, que contó con una potencia y una capacidad de carga superior a la del Saturno V, un cohete de la NASA lanzado por última vez en 1973 que formó parte de las misiones Apolo con destino a la luna. En esas, SpaceX quiere llevar su nuevo plan e invención a otro nivel . Y nada mejor que hacerlo con la super idea del ‘Crew Dragon’, el cual se refleja como el más importante de la nave espacial Dragon 2 de la empresa. Ahora bien; ¿cómo es y de qué trata este proyecto? ¿Qué tiene de particular y por qué se habla de él como un hecho histórico? //sas_manager.render(106520); De qué trata Partamos de la base de que se trata de una nave espacial, de la misma SpaceX, que tiene como objetivo subir a órbita. Y es que, tras años de desarrollo, la empresa estadounidense certificó la que es su primera cápsula que lleva a humanos al espacio. Esta, como tal, es la conocida como ‘Crew Dragon’. De hecho, en ella se pueden llevar hasta 4 personas al espacio . Está propulsada gracias al cohete reutilizable Falcon 9, un cohete que se ha demostrado es seguro y que es capaz de volver a la tierra y aterrizar sin un rasguño, algo que por muchas veces que lo veamos, no se hace viejo. El caso es que ‘Crew Dragon’ es una cápsula espacial que es totalmente diferente a lo que hemos visto hasta ahora. Su diseño es totalmente limpio y nada que ver con los paneles con millones de botones que tienen otras naves. En 2021, y tras algunas probaturas previas, la NASA lanzó y reutilizó tanto la nave como el cohete, un gran paso para SpaceX. La cápsula utilizada en esa misión es la Endeavour, la misma utilizada en la misión Demo-2, y la nave el conocido Falcon 9 de la misión Crew-1. Del mismo modo, es la primera vez que un astronauta de la ESA viaja a bordo de una nave de SpaceX. La intención es reutilizarla para las siguientes misiones y así abaratar costes. Un diseño moderno y futurista Tripulada por turistas espaciales, SpaceX reveló que su ‘Crew Dragon’ se conforma con una cúpula transparente a través de la cual los tripulantes pueden disfrutar de panorámicas espaciales increíbles durante sus trayectos. Como se evidencia en las imágenes del siguiente vídeo, su diseño es moderno y con un toque futurista que lo hace ver como si fuese una película de ciencia ficción de los años 90′. Totalmente autónoma , es equipada con un sistema de aborto de emergencia diseñado para expulsar a los astronautas a un lugar seguro si algo sale mal. Además, en él se cuenta con un sistema de paracaídas para aterrizar la nave espacial de manera segura en el improbable caso de que uno de los cuatro paracaídas principales falle. Este el gran paso final antes de que el programa de tripulación comercial de la NASA certifique a la cápsula como el vehículo para misiones operativas de larga duración en la estación espacial. Esta certificación permitirá continuar las investigaciones tecnológicas que sientan las bases para la exploración futura de la Luna y Marte a partir del programa Artemisa, previsto para 2024."
          author="Jorge Majdalani"
        />
        <News
          title="14 sectoren om in te beleggen in 2022"
          link="https://www.crypto-insiders.nl/nieuws/finance/14-sectoren-om-in-te-beleggen-in-2022/"
          description="ARK Invest is een grote naam op het gebied van beleggen. Het is een institutionele belegger met meer dan $20 miljard aan assets die ze beheren voor hun klanten. Ze zijn al lange tijd erg bullish op Tesla. Elk jaar komt ARK Invest met een lijst met ‘grote ideeën’ waarvan ze denken dat die het […]"
          author="Wiebe Koehoorn"
        />
        <News
          title="En pleine pénurie de puces, Tesla retire discrètement un module électronique de ses Model 3 et Y"
          link="https://www.journaldugeek.com/2022/02/13/en-pleine-penurie-de-puces-tesla-retire-discretement-un-module-electronique-de-ses-model-3-et-y/"
          description="Comme le reste de l'industrie automobile, Tesla est désormais confronté à la crise des composants électroniques. Le constructeur américain est donc obligé de faire des compromis, en retirant ici et là des éléments dans ses voitures pour pouvoir continuer à les produire. En pleine pénurie de puces, Tesla retire discrètement un module électronique de ses Model 3 et Y"
          author="Olivier"
        />
        <News
          title="Pourquoi Elon Musk paie 11 milliards de dollars d'impôt mais Tesla zéro aux Etats-Unis"
          link="https://www.bfmtv.com/economie/pourquoi-elon-musk-paie-11-milliards-de-dollars-d-impot-mais-tesla-zero-aux-etats-unis_AN-202202130180.html"
          description="Au Etats-Unis, Elon Musk assure qu'il devra régler une facture fiscale de 11 milliards de dollars après avoir exercé des options sur ses actions. Elon Musk va devoir régler la plus importante facture fiscale de l'histoire des Etats-Unis. C'est le patron de Tesla qui l'assurait fin décembre dernier en précisant sur Twitter que le montant de ses impôts s'élèverait pour l'année 2021 à 11 milliards de dollars. L'homme le plus riche du monde qui ne se verse aucun salaire n'avait jusqu'à présent payé quasiment aucun impôt au regard de son immense fortune estimée par Bloomberg à plus de 230 milliards de dollars. Mais en exerçant des options sur des millions d'actions de Tesla (qui lui permettent d'obtenir des actions à un tarif préférentiel avant de les revendre au prix du marché s'il exerce son option) et en cédant par ailleurs pour près de 7 milliards d'actions en 2021, Elon Musk a été rattrapé par l'administration fiscale américaine. En exerçant ses options, Musk est en effet taxé comme s'il s'agissait d'un revenu, soit à hauteur de 40,8% sur la valeur des actions nouvellement acquises. Et en vendant ses actions, il est asujetti à un taux de 20% au titre de la taxe sur le capital. Selon les calculs de CNN Business , la facture fiscale fédérale du milliardaire devrait effectivement avoisiner les 11 milliards de dollars. Tesla en perte aux Etats-Unis? Ce qui est plus étonnant c'est que dans le même temps, son entreprise Tesla -valorisée à hauteur de 930 milliards de dollars en Bourse- ne devrait payer aucun impôt fédéral au titre de l'année 2021. L'entreprise de voiture électrique vient pourtant d'enregistrer sa meilleure année historique avec notamment un bénéfice net de 5,5 milliards de dollars et un bénéfice ajusté de 7,6 milliards de dollars. Mais comme l'a relevé CNN Business , Tesla précise dans une note de bas de page de son récent document financier transmis à la SEC , le gendarme de la Bourse américaine, que son activité aux Etats-Unis est déficitaire. Alors que Tesla réalise 45% de ses ventes sur son territoire, la compagnie y déclare des pertes de 130 millions de dollars. La totalité de ses bénéfices proviendraient de ses opérations à l'étranger. Ainsi Tesla déclare avoir payé 839 millions de dollars d'impôt à l'étranger en 2021, 9 millions de taxes d'Etat aux Etats-Unis et zéro dollar d'impôt fédéral sur les sociétés. Etonnant alors que la société a réalisé en 2021 un chiffre d'affaires de 53,8 milliards de dollars, en hausse de plus de 70%! \Cela défie le bon sens, mais cela ne défie pas le code fiscal américain\, estime ainsi Martin Sullivan, économiste en chef pour Tax Analysts, expert des pratiques fiscales des entreprises américaines sur CNN . A l'image des montages fincanciers des géants du net qui font en sorte en Europe d'être déficitaires dans les pays où les bénéfices sont les plus taxés, Tesla pratiquerait la même optimisation fiscale aux Etats-Unis. L'exemple le plus courant est la facturer des frais d'utilisation de la propriété intellectuelle à la filiale afin de la rendre déficitaire. \C'est le truc des multinationales américaines, c'est très courant, estime Martin Sullivan. C'est presque une faute professionnelle de ne pas le faire.\ Le document transmis à la SEC ne précise pas le montage financier de Tesla ni même dans quel pays la compagnie déclare l'essentiel des bénéfices réellement réalisés aux Etats-Unis. Bénéficiaire grâce à la Chine? Si du moins elle en réalise. Selon certains analystes, les 130 millions de perte de Tesla aux Etats-Unis pourraient bien être réels et ce malgré l'envolée de ses ventes de véhicules outre-Atlantique. C'est ce que pense notamment Gordon Johnson de GLJ Research qui rappelle que le constructeur perdait de l'argent avant qu'il ne commence en 2019 à produire des véhicules en Chine dans son usine de Shanghai. \Je pense que c'est une affaire énorme, déclare-t-il à CNN. Ils ont effectivement déclaré qu'ils ne prévoyaient pas d'utiliser les pertes nettes reportées. Cela signifie que leurs opérations américaines perdent de l'argent. C'est un argument que nous avons répété à maintes reprises. En dehors de la Chine, Tesla perd de l'argent.\ Tesla dispose en effet d'un levier comptable aux Etats-Unis qui lui permet de reporter ses pertes passées (importantes) sur plusieurs années afin de reduire son bénéfice imposable actuel. Or Tesla précise dans son document comptable qu'il ne prévoyait pas de reporter ses pertes nettes passées. Autrement dit, si le groupe n'a pas besoin d'utiliser cette possibilité qui lui est offerte... c'est qu'il perd encore de l'argent aux Etats-Unis. Tesla n'a pas souhaité commenté ces différentes allégations. https://twitter.com/FredericBianchi Frédéric Bianchi Journaliste BFM Éco"
          author="Steve Hanley"
          image="https://images.bfmtv.com/gzuxi6mKHegPCGgCsR93cjmWiF8=/0x113:2048x1265/800x0/images/Elon-Musk-1234178.jpg"
        />
      </Feed>
    </div>
  );
}

function Feed(props) {
  return <div className="feed">{props.children}</div>;
}

function News(props) {
  const desc_words = props.description.split(" ");
  const description =
    desc_words.length > 40
      ? desc_words.slice(0, 40).join(" ") + " ..."
      : props.description;
  let image;
  if (!props.image) {
    image =
      "https://placehold.co/800?text=News+Courier&font=Franklin Gothic Medium";
  } else {
    image = props.image;
  }

  const handleClose = (e) => {
    const target = e.target;
    if (target.tagName === "SPAN" && target.textContent === "X") {
      e.currentTarget.remove();
    }
  };

  return (
    <div className="News" onClick={handleClose}>
      <span className="Close">X</span>
      <div className="News_headline">
        <div className="News_image">
          <img src={image} alt="" />
        </div>
        <h1>
          <a href={props.link}>{props.title}</a>
          <span className="News_author">By: {props.author}</span>
        </h1>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
