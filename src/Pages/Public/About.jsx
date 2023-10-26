import Collapse from "@/components/Collapse";
import Banner from "@/components/Banner";
import bannerAbout from "@/assets/images/about.png";

const About = () => {
  const reliability =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const service =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const security =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <div>
      <Banner image={bannerAbout} text="" />
      <div className="about">
        <Collapse title="Fiabilité" content={reliability} />
        <Collapse title="Respect" content={respect} />
        <Collapse title="Service" content={service} />
        <Collapse title="Securité" content={security} />
      </div>
    </div>
  );
};

export default About;
