import { SwotAnalysis, SwotLayoutTypes } from "./GlobalInterface/Swot";

export const swotAnalysisMock: SwotAnalysis = {
  _id: "1233",
  swotLayoutType: SwotLayoutTypes.DEFAULT,
  swotTemplate: true,
  title: "Teste",
  opportunities: {
    title: "TESTE",
    bgColor: "cyan.400",
    fields: [
      {
        _id: "op1",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "op1",
      },
      {
        _id: "op2 123123123123axdasdasd",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "op2 123123123123axdasdasd",
      },
    ],
  },
  weaknesses: {
    title: "TESTE2",
    bgColor: "red.400",
    fields: [
      {
        _id: "1__fsdf23423423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "WEAK 1",
      },
      {
        _id: "1__fsdf2342453423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "WEAK 2",
      },
    ],
  },
  strengths: {
    title: "TESTE3",
    bgColor: "blackAlpha.400",
    fields: [
      {
        _id: "xxxxxxxqsdqsdqd24521231231233123***fsdf23423423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "str 1",
      },
      {
        _id: "1__123344*&**345435fsdf2342453423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "str 2",
      },
    ],
  },
  threats: {
    title: "TESTE4",
    bgColor: "green.400",
    fields: [
      {
        _id: "00002323123***fsdf23423423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "THREAT 1",
      },
      {
        _id: "1_00002323_99f2342453423",
        color: "#fff",
        fontFamily: "sans serify",
        fontSize: 15,
        fontWeight: "bold",
        text: "THREAT 2",
      },
    ],
  },
};
