import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  navigation: {
    position: "fixed",
    left: "50%",
    top: "5%",
    transform: "translate(-50%,-50%)",
    borderRadius: "30px",
  },
}));
