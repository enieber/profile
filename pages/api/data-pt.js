import data from "../../public/data-pt.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
