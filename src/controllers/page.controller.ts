import Pet from "@models/Pet";
import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  const list = Pet.getAll();

  res.render("pages/page", {
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    home: "active",
    list,
  });
};

export const dogs = (req: Request, res: Response) => {
  const list = Pet.getFromType("dog");

  res.render("pages/page", {
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    dogs: "active",
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  const list = Pet.getFromType("cat");

  res.render("pages/page", {
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    cats: "active",
    list,
  });
};

export const fishes = (req: Request, res: Response) => {
  const list = Pet.getFromType("fish");

  res.render("pages/page", {
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    fishes: "active",
    list,
  });
};
