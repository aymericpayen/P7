import Collapse from "@/components/Collapse";
import Banner from "@/components/Banner";
import bannerAbout from "@/assets/images/about.png";
import about from "@/data/about.json";

const About = () => {
  return (
    <div>
      <Banner image={bannerAbout} text="" />
      <div className="about">
        {about.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
