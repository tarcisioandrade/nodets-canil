export type PetTypes = "dog" | "cat" | "fish";

export type PetPropsType = {
  type: PetTypes;
  image: string;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};
