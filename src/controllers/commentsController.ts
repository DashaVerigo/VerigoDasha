/** @format */

import { Request, Response } from "express";
import { Comments } from "../models/models";

class CommentsCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, name, description } = req.body;
      const Com = await Comments.create({ userId, name, description });
      res.status(200).json(Com);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Comments.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const all = await Comments.findAll({ where: { userId: id } });
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Comments.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new CommentsCreate();
