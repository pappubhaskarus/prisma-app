import {MetaType} from "@/server/lib/loader";

function loopEnum<T extends object>(enumObject: T): T[keyof T][] {
  return Object.values(enumObject) as T[keyof T][];
}

const mapValueToType = (value: string, type: MetaType): {
  type: MetaType;
  value: string
} => {
  return {
    value,
    type,
  };
};

export { loopEnum, mapValueToType };
