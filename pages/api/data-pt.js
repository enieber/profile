import data from "../../data-pt.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
