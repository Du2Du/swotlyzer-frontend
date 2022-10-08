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

export interface SwotArea {
  bgColor: string;
  fields: Array<SwotField>;
  title: string;
}

export interface SwotAnalysis {
  _id: string;
  title: string;
  swotTemplate: boolean;
  swotLayoutType: SwotLayoutTypes;
  strengths: SwotArea;
  weaknesses: SwotArea;
  opportunities: SwotArea;
  threats: SwotArea;
}
