import Itinerary from "../models/itinerary.js";


export const getItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findAll();
        res.status(200).json(itinerary);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
};

// export const postItinerary = async (req, res) => {
//     try {
//         const ItineraryAlreadyExist = await Itinerary.findOne({
//           where: {
//             user_id: req.params.user_id,
//             place_id: req.body.event_id
//           }
//         });
//         if (ItineraryAlreadyExist) {
//           return res.status(400).json({ message: "Rencana perjalanan sudah dibuat oleh user." });
//         }

//     const itenerarypost = await Itinerary.create({
//         user_id: req.body.user_id,
//         place_id: req.body.event_id,
//         start_date: req.body.start_date,
//         end_date: req.body.end_date,
//         city: req.body.city,
//         category: req.body.category,
//         numberofpeople: req.body.numberofpeople,
//       }, { fields: ['user_id', 'place_id', 'start_date', 'end_date', 'city','category', 'numberofpeople'] });
//       res.status(201).json(itenerarypost);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//     }
//   };

export const postItinerary = async(req, res) =>{
  try {
      await Itinerary.create(req.body);
      res.status(201).json({msg: "Rencana perjalanan anda berhasil dibuat!"});
  } catch (error) {
      console.log(error.message);
  }
}


export const deleteItinerary = async (req, res) => {
    try {
        const ItineraryExist = await Itinerary.findOne({
          where: {
              id: req.params.id,
          }
        });
        if (!ItineraryExist) {
          return res.status(400).json({ message: "Rencana Perjalanan anda telah dihapus!." });
        }
        await Itinerary.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({ message: "Rencana Perjalanan berhasil dihapus." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
    };