/** @format */

import { Request, Response } from "express";
import { Apartments } from "../models/models";

class ApartmentsCreate {
  async create(req: Request, res: Response) {
    try {
      const {
        userId,
        typeapartmentsId,
        name,
        description,
        price,
        availability,
      } = req.body;
      const create = await Apartments.create({
        userId,
        typeapartmentsId,
        name,
        description,
        price,
        availability,
      });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allmodels = await Apartments.findAll();
      res.status(200).json(allmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const One = await Apartments.findOne({
        where: { typeapartmentsId: id },
      });
      res.status(200).json(One);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const avail = req.query.avail;
      const models = await Apartments.findOne({
        where: { id: id },
      });
      await Apartments.update({ availability: avail }, { where: { id: id } });
      res.status(200).json(
        await Apartments.findOne({
          where: { id: id },
        })
      );
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Apartments.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ApartmentsCreate();
