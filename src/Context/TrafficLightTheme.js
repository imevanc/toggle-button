import { createTheme } from "@mui/material/styles";

const TrafficLightTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
    },
    loading: {
      main: "blue",
      background: "blue",
      border: "blue",
      color: "blue",
      nonSelectedColor: "blue",
    },
    green: {
      main: "linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)",
      background: "#A5E7E2",
      border: "2px solid #FBFBFB",
      color: "#4CAD94",
      nonSelectedColor: "#FFFFFF",
    },
    amber: {
      main: "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)",
      border: "2px solid #F9D29F",
      color: "#9F938B",
      background: "#F8CAA3",
      nonSelectedColor: "#FFFFFF",
    },
    red: {
      main: "linear-gradient(180deg, #F1B496 0%, #EA806A 100%)",
      border: "2px solid #FBFBFB",
      color: "#E47958;",
      background: "#F2CBBD",
      nonSelectedColor: "#FFFFFF",
    },
  });
};
export default TrafficLightTheme;
