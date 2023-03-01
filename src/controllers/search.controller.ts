import Pet from "@models/Pet";
import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
  const search = req.query.q;

  if (!search) {
    res.redirect("/");
    return;
  }

  const list = Pet.getFromName(search as string);

  res.render("pages/page", {
    list,
    search,
  });
};
