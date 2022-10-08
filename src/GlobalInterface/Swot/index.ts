export enum SwotLayoutTypes {
  DEFAULT = "DEFAULT",
}

export const SwotLayoutDictionary = {
  [SwotLayoutTypes.DEFAULT]: "Default",
};

export interface SwotField {
  _id: string;
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: string;
  color: string;
}

export interface SwotAnalysis {
  _id: string;
  title: string;
  swotTemplate: boolean;
  swotLayoutType: SwotLayoutTypes;
  strengths: Array<SwotField>;
  weaknesses: Array<SwotField>;
  opportunities: Array<SwotField>;
  threats: Array<SwotField>;
}
