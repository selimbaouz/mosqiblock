import { MdVerified } from "react-icons/md";
import { FaCheck, FaTruck } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbPlaneTilt, TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiFrance } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineHeart, HiOutlinePaperAirplane, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import SophieD from "@/public/images/avis/sophieD.webp";
import ClaudiaR from "@/public/images/avis/claudiaR.webp";
import JMT from "@/public/images/avis/jmt.webp";
import LauraM from "@/public/images/avis/lauraM.webp";
import MarcL from "@/public/images/avis/marcL.webp";
import MarieL from "@/public/images/avis/marieL.webp";
import PhillipeG from "@/public/images/avis/phillippeG.webp";
import { FaBurn, FaUndo } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Benefits from "@/components/mode/Benefits";
import Utilisation from "@/components/mode/Utilisation";
import Step1 from "@/public/images/step1.avif";
import Step2 from "@/public/images/step2.avif";
import Step3 from "@/public/images/step3.avif";
import Step4 from "@/public/images/step4.avif";

export const bestReviewsData = [
  {
      name: "Anaïs", 
      picture: [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma"
        }
      ],
      rating: 5,
      content: "Un parfum envoûtant qui sublime ma présence avec élégance et luxe. Une véritable signature olfactive."
  },
  {
    name: "Jessica", 
      picture: [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma"
        }
      ],
      rating: 5,
      content: "Un parfum envoûtant qui sublime ma présence avec élégance et luxe. Une véritable signature olfactive."
  },
  {
    name: "Marie", 
      picture: [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma"
        }
      ],
      rating: 5,
      content: "Un parfum envoûtant qui sublime ma présence avec élégance et luxe. Une véritable signature olfactive."
  },
]

export const benefitsFeelingData = [
  {
    icon: HiOutlineShieldCheck, 
    title: "Confort", 
    content: "Une fois fixé, il reste fermement en place et s'adapte à tous les sièges auto, quelle que soit leur forme."
  },
  {
    icon: HiOutlineSparkles, 
    title: "Efficacité", 
    content: "Diminue le risque de complications graves lors d'accidents de 82,7% comparé aux ceintures standard."
  },
  {
    icon: HiOutlineHeart, 
    title: "Protection", 
    content: "Design innovant répartissant la pression sur les cuisses, pour une protection et un confort optimal."
  },
  {
    icon: HiOutlineHeart, 
    title: "Protection", 
    content: "Design innovant répartissant la pression sur les cuisses, pour une protection et un confort optimal."
  }
]

export const trustsData = [
  {
    icon: RiSecurePaymentLine, 
    title: "Livraison Gratuite", 
  },
  {
    icon: FaCheck, 
    title: "Essai de 90 Jours", 
  },
  {
    icon: TbPlaneTilt, 
    title: "Retours Gratuits", 
  },
  {
    icon: BiSupport, 
    title: "Support client 7j/7", 
  }
]

export const selectModesData = [
  {
      title: "Avantages"
  },
  {
      title: "Utilisation"
  }
]

export const productModeSelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      content: <Benefits />
    };
  case 1:
    return {
      content: <Utilisation />
    };
  default:
    return {
      content: <Benefits />
    };
  }
};

export const selectInstructionData = [
  {
    title: "Etape 1",
    imgSrc: Step1.src,
    altSrc: "First image of instruction",
    width: Step1.width,
    height: Step1.height
  },
  {
    title: "Etape 2",
    imgSrc: Step2.src,
    altSrc: "Second image of instruction",
    width: Step2.width,
    height: Step2.height
  },
  {
    title: "Etape 3",
    imgSrc: Step3.src,
    altSrc: "Third image of instruction",
    width: Step3.width,
    height: Step3.height
  },
  {
    title: "Etape 4",
    imgSrc: Step4.src,
    altSrc: "Four image of instruction",
    width: Step4.width,
    height: Step4.height
  }
]

export const productInstructionSelected = (selected: number) => {
  switch (selected) {
  case 0:
    return {
      content: "La ceinture de l'ajusteur doit être tirée à travers l'espace entre le siège et le dossier"
    };
  case 1:
    return {
      content: "Ensuite, la ceinture doit être tirée sous le siège, en veillant à ce que la ceinture ne soit pas tordue"
    };
  case 2:
    return {
      content: "L'extrémité de la ceinture doit être bouclée à travers les trous supérieur et inférieur de la boucle, respectivement"
    };
  case 3:
    return {
      content: "La ceinture doit être serrée fermement en la tirant vers le bas"
    };
  default:
    return {
      content: "La ceinture de l'ajusteur doit être tirée à travers l'espace entre le siège et le dossier"
    };
  }
};

export const reviewsData = [
  {
    image: SophieD,
    name: "Sophie D.",
    score: 5,
    content: "J’ai été agréablement surprise par la simplicité de l’installation. C’est un produit fantastique !",
  },
  {
    image: ClaudiaR,
    name: "Claudia R.",
    score: 5,
    content: "Ce bidet convient parfaitement à toute la famille. Les différents modes sont adaptés à chaque besoin, et son installation a été rapide.",
  },
  {
    image: PhillipeG,
    name: "Philippe G.",
    score: 5,
    content: "Ce bidet offre un excellent rapport qualité-prix. Il est efficace, facile à utiliser, et l’installation ne nécessite aucune compétence particulière. Je suis très satisfait de mon achat.",
  },
  {
    image: MarieL,
    name: "Marie L.",
    score: 5,
    content: "Je suis ravie de mon achat ! L’installation était un jeu d’enfant et les différents modes de lavage sont super pratiques. Je recommande vivement !",
  },
  {
    image: JMT,
    name: "Jean-Marc T.",
    score: 5,
    content: "Ce bidet est parfait pour réduire notre consommation de papier toilette. C’est à la fois économique et écologique.",
  },
  {
    image: LauraM,
    name: "Laura M.",
    score: 5,
    content: "Ce bidet a complètement changé notre manière de voir l’hygiène. Les deux modes de lavage sont très appréciables et rendent chaque utilisation confortable. Je le recommande à tout le monde !",
  },
  {
    image: MarcL,
    name: "Marc L.",
    score: 5,
    content: "Je suis impressionné par la qualité de ce bidet. Facile à installer et à utiliser, il est à la fois moderne et pratique.",
  },
];

export const checkProduct = [
  {
    title: "Benefit 1",
    icon: FaBurn,
  },
  {
      title: "Benefit 2",
      icon: HiOutlineHandThumbUp,
  },
  {
      title: "Benefit 3",
      icon: HiOutlinePaperAirplane,
  },
]

export const detailsProduct = [
  {
    title: "Pourquoi Wemom ?",
    content: "Vous avez 90 jours pour tester, adorer, et même revenir vers nous si besoin. Un achat en toute confiance !"
  },
  {
    title: "90 Jours pour tester",
    content: "Vous avez 90 jours pour tester, adorer, et même revenir vers nous si besoin. Un achat en toute confiance !"
  },
  {
    title: "Foire Aux Questions",
    content: "Vous avez 90 jours pour tester, adorer, et même revenir vers nous si besoin. Un achat en toute confiance !"
  },
  {
    title: "Informations de Livraison",
    content: "Oui, vous avez bien lu ! Livraison gratuite et expédiée en 24h, pour que votre produit arrive presque avant même que vous n'ayez eu le temps de vous réjouir de votre achat !"
  },
]

export const faqData = [
  {
      title: "Comment fonctionne le bidet ?",
      content: "Notre bidet utilise des jets d'eau ajustables pour un nettoyage efficace. Vous allez vous sentir aussi frais qu'après une douche, mais sans le déplacement."
  },
  {
      title: "Installation est-elle facile ?",
      content: "Oh que oui ! L'installation du bidet se fait en moins de 10 minutes, un vrai jeu d’enfant, même pour les plus bricoleurs du dimanche ! "
  },
  {
      title: "Est-ce que ça fonctionne sans électricité ?",
      content: "Absolument ! Pas besoin de vous transformer en électricien. Votre porte-monnaie et notre planète vous diront merci ! "
  },
  {
    title: "Compatible avec toutes les toilettes ?",
    content: "Bien sûr ! Notre bidet s’adapte à toutes les toilettes standards, comme un caméléon sur un pot de fleurs !"
  },
  {
      title: "Vais-je faire des économies ?",
      content: "Économisez jusqu'à 80% de papier toilette. Ça veut dire plus d’argent pour le café, les gâteaux, ou même cette plante que vous oubliez toujours d’arroser !"
  },
  {
      title: "Quels sont les délais de livraison ?",
      content: "Nos délais de livraison sont de 7 à 13 jours ouvrés. Mais si vous êtes chanceux, vous pourriez recevoir votre bidet en moins d'une semaine ! Pas de frais cachés, juste de la bonne humeur !"
  },
  {
      title: "Où livrons-nous ?",
      content: "Partout dans le monde ! Que vous soyez à Paris ou au pôle Nord, nous vous livrons gratuitement ! (Mais n'attendez pas trop de pingouins pour vos commandes.)"
  },
  {
      title: "D'où expédions-nous les colis ?",
      content: "Nous expédions directement depuis notre base en France. On vous a dit que c'était une entreprise 100% française !"
  },
  {
      title: "Qui livre mes articles ?",
      content: "Vos articles sont livrés par votre service postal local. C'est un peu comme un rendez-vous surprise avec le facteur !"
  },
  {
      title: "Que faire si je ne suis pas là ?",
      content: "Pas de panique ! Si votre colis est trop gros pour la boîte aux lettres, il sera déposé à votre bureau de poste. Comme ça, pas besoin de jouer à cache-cache avec le facteur !"
  },
  {
      title: "Comment corriger une adresse erronée ?",
      content: "Si votre commande n'est pas encore partie, contactez-nous tout de suite ! Sinon, une fois expédiée, c'est comme essayer de changer le cours d'une rivière… pas facile !"
  },
  {
      title: "Articles manquants dans ma commande ?",
      content: "Chaque fournisseur s'occupe d'un produit. Donc si vous commandez 5 articles, vous aurez peut-être 5 colis différents. Une petite surprise par la poste, mais chacun est spécial à sa manière !"
  },
  {
      title: "Comment utiliser un code promo ?",
      content: "Pour utiliser un code promo, entrez-le lors du paiement. C'est comme une magie, et hop ! Réduction instantanée. Pensez à votre code comme à un super-héros du shopping !"
  },
  {
      title: "Votre site est-il sécurisé ?",
      content: "Oui, 100% sécurisé (voire même 300% !). Chaque page est protégée comme un château fort. Vous pouvez acheter sans stress, comme si vous étiez en vacances !"
  },
  {
      title: "Quels modes de paiement sont acceptés ?",
      content: "Vous pouvez régler par Carte bancaire. Pas de chèques ni de virements, parce que nous n'avons pas encore découvert la machine à remonter le temps !"
  }
];


export const stacksData = [
  {
    icon: FaTruck,
    title: "Livraison OFFERTE",
  },
  {
    icon: IoIosPeople,
    title: "+319 clients satisfaits",
  },
  {
    icon: TbTruckReturn,
    title: "Satisfait ou Remboursé",
  },
  {
    icon: GiFrance,
    title: "Support Français",
  },
];

export const beneficesData = [
  {
    icon: FaTruck,
    title: "Protection garantie",
  },
  {
    icon: IoIosPeople,
    title: "Grossesse sereine",
  },
  {
    icon: TbTruckReturn,
    title: "82% de risques en moins",
  },
  {
    icon: GiFrance,
    title: "Adaptation parfaite",
  },
];

export const beneficesProductData = [
  {
    icon: GoHeartFill,
    title: "Support 24/7",
  },
  {
    icon: MdVerified,
    title: "Livraison Gratuite",
  },
  {
    icon: FaUndo,
    title: "Retours Gratuits",
  },
];
