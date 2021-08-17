import { NextApiRequest, NextApiResponse } from "next";
import {services} from '../../data';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  // get data from db and json({dbData})
  res.status(200).json({services});
}
