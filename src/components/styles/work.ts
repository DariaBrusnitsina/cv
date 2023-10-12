import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  work: {
    border: "2px solid #e5e5e5",
    borderRadius: "15px",
    padding: "20px",
  },
  accordionSummary: {
    display: "flex",
    flexDirection: "column",
  },
}));
