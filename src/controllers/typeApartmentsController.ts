/** @format */

import { Request, Response } from "express";
import { TypeApartments } from "../models/models";

class TypeApartmentsCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const type = await TypeApartments.create({ name });
      res.status(200).json(type);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const alltype = await TypeApartments.findAll();
      res.status(200).json(alltype);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await TypeApartments.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TypeApartmentsCreate();
