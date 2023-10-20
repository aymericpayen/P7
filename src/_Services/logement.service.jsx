import flatsList from "@/data/flats.json";

const GetFlats = () => {
  return flatsList;
};

const GetOneFlat = async (id) => {
  const oneFlat = await flatsList.find((flat) => flat.id === id);
  return oneFlat;
};

export const flatservice = {
  GetFlats,
  GetOneFlat,
};

export default flatservice;
