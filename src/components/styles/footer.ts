import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  footer: {
    borderTop: "1px solid black",
    background: "gray",
    marginTop: "40px",
  },
  footerNav: {
    maxWidth: "50%",
    display: "flex",
    justifyContent: "space-around",
  },
}));
