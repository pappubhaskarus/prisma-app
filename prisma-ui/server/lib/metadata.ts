import { EDomainType } from "./loader";

const categories = [
  {
    name: "CAKES",
    parent: EDomainType.Bakeries,
  },
  {
    name: "PASTERIES",
    parent: EDomainType.Bakeries,
  },
  {
    name: "PIZZA",
    parent: EDomainType.Bakeries,
  },
  {
    name: "MACHINE LEARING",
    parent: EDomainType.Blog,
  },
  {
    name: "ARTIFICIAL INTELLIGENCE",
    parent: EDomainType.Blog,
  },
  {
    name: "ENGINEERING",
    parent: EDomainType.Blog,
  },
];

export { categories };
