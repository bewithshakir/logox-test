import { IOptionProps } from "../components/dropdrown/SelectDropDown";

export const checkDefaultVal = (val: string | IOptionProps) => {
  if (typeof val === "object") {
    return (val as IOptionProps).name;
  }
  return val;
};
