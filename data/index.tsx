import { MdBedtime, MdFamilyRestroom, MdFlashOn, MdOutlineBackpack, MdOutlineOutdoorGrill, MdVerified } from "react-icons/md";
import { FaCheck, FaTruck } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbPlaneTilt, TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiChemicalDrop, GiFrance, GiSpeakerOff, GiTreeBranch } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineHeart, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";
import Leaf from "@/public/images/leaf.png";
import Thunder from "@/public/images/thunder.png";
import Baby from "@/public/images/baby.png";
import Shield from "@/public/images/shield.png";
import Avis1 from "@/public/images/avis/avis1.avif";
import Avis2 from "@/public/images/avis/avis2.avif";
import Avis3 from "@/public/images/avis/avis3.avif";
import { FaUndo } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import Benefits from "@/components/mode/Benefits";
import Utilisation from "@/components/mode/Utilisation";
import Step1 from "@/public/images/step1.avif";
import Step2 from "@/public/images/step2.avif";
import Step3 from "@/public/images/step3.avif";
import Step4 from "@/public/images/step4.avif";
import Sarah from "@/public/images/avis/Sarah.avif";
import Joshua from "@/public/images/avis/Joshua.avif";
import Connie from "@/public/images/avis/Connie.webp";

export const bestReviewsData = [
  {
      name: "Sarah J.", 
      picture: [
        {
          imageUrl: Sarah.src,
          profileUrl: "#"
        }
      ],
      rating: 5,
      content: "No more mosquitoes! This tool really helped me out during my camping trip last summer. It killed all the bugs and I got to enjoy the outside without getting any bites."
  },
  {
    name: "Joshua M.", 
      picture: [
        {
          imageUrl: Joshua.src,
          profileUrl: "#"
        }
      ],
      rating: 5,
      content: "Received this MosqiShock tool super fast and it perfectly satisfied my needs and worked just as promised. I would recommend this lamp to everyone this summer, it’s very effective against mosquitoes."
  },
  {
    name: "Connie E.", 
      picture: [
        {
          imageUrl: Connie.src,
          profileUrl: "#"
        }
      ],
      rating: 5,
      content: "This zapper crushes the competition, no doubt about it. My family won’t live without it now."
  },
]

export const benefitsProductData = [
  {
    title: "Your must-have for magical nights outdoors", 
    content: "Transform every camping trip into a bite-free adventure."
  },
  {
    title: "Advanced UV-light—mosquitoes can’t resist", 
    content: "Enjoy evenings without buzzing or bites, naturally."
  },
  {
    title: "USB rechargeable—freedom from batteries", 
    content: "Stay protected anywhere, anytime—just plug in and go."
  },
  {
    title: "Absolutely safe—no toxins, no worries", 
    content: "Protect your family with pure peace of mind."
  },
  {
    title: "Ultra-compact, always by your side", 
    content: "Slip it in your bag and take protection everywhere."
  },
  {
    title: "Hang it, stand it, love it", 
    content: "Versatile hook for effortless use—at home or on the go."
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
      title: "Benefits."
  },
  {
      title: "How it works."
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
    image: Avis1,
    author: "Sarah J.",
    score: 5,
    title: "Outstanding Product",
    content: "No more mosquitoes! This tool really helped me out during my camping trip last summer. It killed all the bugs and i got to enjoy the outside without getting any bites."
  },
  {
    image: Avis2,
    author: "Michael R.",
    score: 4.7,
    title: "Best Purchase",
    content: "I was pleasantly surprised after using this mosquito lamp. I never expected it to be this effective and powerful. And the battery lasted for ages, so i could turn it on and simply forget all about this lamp and mosquitoes. I highly recommend this tool, it’s much better than other alternatives."
  },
  {
    image: Avis3,
    author: "Joshua M. ",
    score: 5,
    title: "Worth the money",
    content: "Received this MosqiShock tool super fast and it perfectly satisfied my needs and worked just as promised. I would recommend this lamp to everyone this summer, it’s very effective against mosquitoes."
  },
];

export const checkProduct = [
  {
    title: "Chemical-Free",
    img: Leaf,
  },
  {
    title: "Instant & Silent",
    img: Thunder,
  },
  {
    title: "Kid & Pet Safe",
    img: Baby,
  },
  {
    title: "Easy Clean",
    img: Shield,
  },
]

export const detailsProduct = [
  {
    title: "Shipping information",
    content: `• Free shipping on all orders
• Orders processed within 24–48 hours
• Delivery in 2–5 business days (France/EU), 5–10 days (international)
• Tracking number sent by email as soon as your order ships
• Secure packaging for safe arrival`
  },
  {
    title: "Returns and refunds",
    content: `• 60-day satisfaction guarantee—try MosqiBlock risk-free
• Not satisfied? Contact us within 60 days for a full refund, no questions asked
• Product must be returned in original condition and packaging
• Fast and easy return process—our support team is here to help`
  },
]


export const faqData = [
  {
    title: "Does MosqiBlock really stop mosquito bites?",
    content: "Yes, MosqiBlock uses specially calibrated UV light to attract and trap mosquitoes effectively without chemicals or odors. Most users notice a significant reduction in bites within the first nights, whether indoors or outdoors."
  },
  {
    title: "Is it safe for kids, pets, and houseplants?",
    content: "Absolutely. MosqiBlock is chemical-free and non-toxic. The UV light is harmless to children, pets, and plants, making it ideal for family spaces and shared living areas."
  },
  {
    title: "How much space does one device cover?",
    content: "One MosqiBlock covers approximately 20 to 30 square meters, suitable for bedrooms, living rooms, or patios. For larger areas, multiple devices can be used for optimal protection."
  },
  {
    title: "Can I use it both indoors and outdoors?",
    content: "Yes, MosqiBlock is designed for both indoor and outdoor use, perfect for bedrooms, patios, camping, and more."
  },
  {
    title: "How long does the battery last?",
    content: "The rechargeable USB battery lasts up to 10 to 12 hours, enough for a full night or outdoor evening. It recharges easily like a smartphone."
  },
  {
    title: "Is there any maintenance required?",
    content: "Maintenance is simple: empty the collection tray every few days and clean the device with a brush if needed. No refills or consumables are required."
  },
  {
    title: "What’s included in the box?",
    content: "The pack includes the MosqiBlock lamp, USB charging cable, and a quick start guide, all securely packaged for safe delivery."
  },
  {
    title: "What is your return policy?",
    content: "We offer a 30 to 60-day satisfaction guarantee. If you’re not happy, contact our support for a full refund. The product must be returned in original condition and packaging."
  },
  {
    title: "How do I contact support if I have more questions?",
    content: "Our friendly support team is available via email or contact form on our website to assist you with any questions or concerns."
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

export const annoucementData = [
  {
    icon: "🦟",
    title: "Chemical-free",
  },
  {
    icon: "🔋",
    title: "USB Rechargeable",
  },
  {
    icon: "💤",
    title: "Ultra-Quiet",
  },
];

export const BenefitsData = [
  {
    icon: GiSpeakerOff,
    title: "Silent Operation",
  },
  {
    icon: MdOutlineBackpack,
    title: "Easy to Carry",
  },
  {
    icon: GiTreeBranch,
    title: "Eco Friendly",
  },
  {
    icon: GiChemicalDrop,
    title: "Chemical-Free Safety",
  },
  {
    icon: MdFamilyRestroom,
    title: "Family Protection",
  },
  {
    icon: MdBedtime,
    title: "Bite-Free Nights",
  },
  {
    icon: MdFlashOn,
    title: "Instant Relief",
  },
  {
    icon: MdOutlineOutdoorGrill,
    title: "Outdoor & Indoor",
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
