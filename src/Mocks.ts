import { SwotAnalysis, SwotLayoutTypes } from "./GlobalInterface/Swot";

export const swotAnalysisMock: SwotAnalysis = {
  _id: "1233",
  swotLayoutType: SwotLayoutTypes.DEFAULT,
  swotTemplate: true,
  title: "Teste",
  opportunities: [
    {
      _id: "1fsdf23423423",
      color: "#fff",
      fontFamily: "sans serify",
      fontSize: 15,
      fontWeight: "bold",
      text: "teste",
    },
    {
      _id: "1fsdf2342453423",
      color: "#fff",
      fontFamily: "sans serify",
      fontSize: 15,
      fontWeight: "bold",
      text: "123123121323123dsfsdfsdfsdf",
    },
  ],
  weaknesses: [
    {
      _id: "21235dfgdfvvwert32535",
      color: "#fff",
      fontFamily: "sans serify",
      fontSize: 15,
      fontWeight: "bold",
      text: "dgdfgOK",
    },
  ],
  strengths: [
    {
      _id: "34534534rtyrty53",
      color: "#fff",
      fontFamily: "sans serify",
      fontSize: 15,
      fontWeight: "bold",
      text: "OK45325",
    },
  ],
  threats: [
    {
      _id: "rtyrtyrt2343244",
      color: "#fff",
      fontFamily: "sans serify",
      fontSize: 15,
      fontWeight: "bold",
      text: "TESTETESTESTESTESTESTEW",
    },
  ],
};
