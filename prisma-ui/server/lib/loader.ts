import Metadata from "../models/Metadata";
import { categories } from "./metadata";
export enum EDomainType {
  Blog = "blog",
  EdTech = "edtech",
  Bakeries = "bakeries",
}

const categoryMapping: EDomainCategory[] = categories;

export type EDomainCategory = {
  name: string;
  parent: EDomainType;
};

export enum EDomainRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}
export default async function dbLoad() {
  console.log("Loading started");

  genericLoader(EDomainType, "DOMAIN");
  genericLoader(EDomainRole, "ROLE");

  let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
    loadCategories();
  }, 5000);
}

function loopEnum<T extends object>(enumObject: T): T[keyof T][] {
  return Object.values(enumObject) as T[keyof T][];
}

function genericLoader<T extends object>(t: T, type: string, parent?: string) {
  loopEnum(t).forEach(async (value) => {
    const exists = await Metadata.exists({
      type,
      value,
      parent,
    });

    if (!exists) {
      await Metadata.create({
        type,
        value,
        parent,
      });
    }
  });
}

function loadCategories() {
  categoryMapping.forEach(async (c) => {
    const type = "CATEGORY";
    const parent = await Metadata.findOne({
      type: "DOMAIN",
      value: c.parent,
    });
    console.log(parent?._id);
    const exists = await Metadata.exists({
      type,
      value: c.name,
      parent: parent?._id,
    });

    if (!exists) {
      await Metadata.create({
        type,
        value: c.name,
        parent: parent?._id,
      });
    }
  });
}
