import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  projectCard: {
    marginBottom: "40px",
    width: "30%",
    background: "#fff",
  },
  link: {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
    color: "gray",
  },
  technologies: {
    margin: "20px 0",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "5px",
    rowGap: "5px",
  },
}));
