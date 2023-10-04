import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  header: {
    padding: "140px 50px 0 50px",
    display: "flex",
    justifyContent: "space-between",
  },
  headerText: {
    maxWidth: "50%",
  },
  img: {
    height: "250px",
    borderRadius: "50%",
  },
  socials: {
    display: "flex",
    columnGap: "20px",
  },
  projects: {
    padding: "160px 50px 0 50px",
  },
  projectsWrapper: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  projectCard: {
    marginBottom: "40px",
    height: "150px",
    width: "30%",
  },
}));
