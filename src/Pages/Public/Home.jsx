/* eslint-disable react/jsx-key */
import FlatsService from "@/_Services/logement.service.jsx";
import Banner from "@/components/banner";
import banner from "@/assets/images/banner.png";
import Card from "@/components/card";
const Home = () => {
  return (
    <>
      <section className="home">
        <Banner text={"Chez vous, partout et ailleurs"} image={banner} />
        <div className="cards-container">
          {FlatsService.GetFlats().map(
            (flat) => (
              <Card
                title={flat.title}
                id={flat.id}
                image={flat.cover}
                key={flat.id}
              />
            )
            // <Card title={logement.title} />,
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
