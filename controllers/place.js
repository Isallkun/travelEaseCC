import Place from "../models/place.js";

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const places = await Place.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (places) {
      res.status(200).json(places);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
