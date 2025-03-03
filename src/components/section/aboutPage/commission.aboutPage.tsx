"use client";
import { ParallaxSection } from "@/components";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import {
  GiMegaphone,
  GiReceiveMoney,
  GiToolbox,
  GiPartyPopper,
} from "react-icons/gi";

export const Commission = () => {
  return (
    <ParallaxSection
      className="py-5 md:py-48 bg-bleuRoyale min-h-[80vh] flex justify-center items-center"
      showTopClouds
      backgroundImage="/img/Sky2.webp"
      id="capacity"
    >
      <article className="flex flex-col gap-8 items-center  text-white">
        <motion.div
          className="flex flex-col gap-2 items-center  text-white"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <h2 className="font-subtitle text-2xl text-primary ">
            Un fonctionnement participatif et collaboratif
          </h2>
          <h3 className="text-4xl md:text-6xl font-title">
            La vie d’école au quotidien
          </h3>
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-2  md:max-w-[1200px] px-2 text-white">
          <motion.p
            className="text-justify "
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            Notre modèle repose sur des commissions actives composées de parents
            l’engagement autour des projets communs, assurant une cohérence avec
            les valeurs de Calandreta.
          </motion.p>
          <motion.p
            className="text-justify  "
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            L&apos;école Calandreta repose sur une dynamique associative qui
            associe étroitement parents, enseignants, et collectivités locales.
            Dans ce cadre, les commissions jouent un rôle essentiel en
            structurant l’implication des parents autour de thèmes clés. Chaque
            commission fonctionne de manière autonome, avec un référent dédié
            qui assure la coordination avec le Conseil d’Administration
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  justify-items-center mt-10">
          {items.map((item, index) => (
            <ItemsCard
              key={`commission-${index}`}
              title={item.title}
              description={item.description}
              iconSize={60}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </article>
    </ParallaxSection>
  );
};

interface ItemsCardProps {
  title: string;
  description: string;
  icon: IconType;
  iconSize: number;
  index: number;
}

const ItemsCard = ({
  title,
  description,
  icon: Icon,
  iconSize,
  index,
}: ItemsCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2 items-center justify-center relative p-8 border-2 border-primary rounded-lg max-w-[300px] md:max-w-[400px] bg-darkBlue text-white"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3 * (index / 0.8),
      }}
    >
      <Icon
        size={iconSize}
        className="text-white border-2 border-primary bg-darkBlue p-2 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h3 className="text-2xl font-title text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </motion.div>
  );
};

const items = [
  {
    title: "Commission Communication",
    description:
      "Assurer une communication efficace pour valoriser les actions de l'école et attirer de nouveaux publics.",
    icon: GiMegaphone,
    bgColor: "bg-purple",
    textColor: "text-white",
  },
  {
    title: "Commission Mécénat/Subventions",
    description:
      "Rechercher des soutiens financiers et matériels pour l'école.",
    icon: GiReceiveMoney,
    bgColor: "bg-sky-500",
    textColor: "text-white",
  },
  {
    title: " Commission Bricolage",
    description: "Assurer l'entretien et l'aménagement des locaux scolaires.",
    icon: GiToolbox,
    bgColor: "bg-purple",
    textColor: "text-white",
  },
  {
    title: "Commission Festivités",
    description:
      "Organiser des événements pour renforcer le lien communautaire et générer des fonds pour l'école.",
    icon: GiPartyPopper,
    bgColor: "bg-purple",
    textColor: "text-white",
  },
];

/* 
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="text-center md:text-left flex flex-col gap-2">
          <h2 className="font-subtitle text-2xl text-primary">
            Une structure à taille humaine
          </h2>
          <h3 className="font-title text-4xl md:text-6xl text-white">
            Des capacités d’accueil adaptées aux enfants du primaire et de la
            maternelle
          </h3>
        </div>
        <div className=" px-4">
          <p className="text-justify md:text-left text-white">
            Notre école accueille une soixantaine d’enfants, leur offrant un
            cadre familial et individualisé. Chaque classe de l’école primaire
            bénéficie d’un encadrement attentionné, favorisant une relation
            étudiante épanouie.
          </p>
        </div>
      </div> */
