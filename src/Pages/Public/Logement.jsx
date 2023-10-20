import FlatsService from "@/_Services/logement.service.jsx";
import { useParams, useNavigate } from "react-router-dom";
import Caroussel from "@/components/Caroussel.JSX";
import { useEffect, useState } from "react";
import Host from "@/components/Host";
import Rating from "@/components/Rating";
import Collapse from "@/components/Collapse";

const Logement = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    getInfo();
  }, [id]);

  const getInfo = async () => {
    await FlatsService.GetOneFlat(id)
      .then((response) => {
        console.log(response);
        if (response) {
          setFlat(response);
          setIsLoading(false);
        } else {
          navigate("/404");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="Logement">
      <Caroussel images={flat.pictures} />
      <section className="flat-descriptions-layout">
        <div className="flat-descriptions">
          <div className="flat-descriptions_info">
            <h1>{flat.title}</h1>
            <p>{flat.location}</p>
            <div className="flat-descriptions-tags">
              {flat.tags.map((tag, index) => (
                <span className="flat-descriptions-tags_tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flat-host">
            <Host host={flat.host} />
            <Rating score={flat.rating} />
          </div>
        </div>
        <div className="flat-descriptions-details">
          <Collapse title="Description" content={flat.description} />
          <Collapse
            nextLine={true}
            title="Équipements"
            content={flat.equipments}
          />
        </div>
      </section>
    </div>
  );
};

export default Logement;
