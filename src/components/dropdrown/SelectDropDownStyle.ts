import { createUseStyles } from "react-jss";

export const useDropDownStyles = createUseStyles({
  dropDownWrapper: {
    position: "relative",
  },
  dropdown: {
    background: "#ffffff",
    border: "1px solid #ced4da",
    borderRadius: "6px",
    display: "flex",
    cursor: "pointer",
    position: "relative",
    userSelect: "none",
    boxSizing: "border-box",
    overflow: "hidden",
    textAlign: "left",
  },
  dropDownLabel: {
    display: "block",
    whiteSpace: "nowrap",
    flex: "1 1 auto",
    textOverflow: "ellipsis",
    border: "0",
    padding: "12px",
    fontSize: "1rem",
    color: "#70767c",
    "&:focus": {
      outline: "none",
    },
  },
  dropDownFocus: {
    borderColor: "#6366F1",
    boxShadow: "0 0 0 0.2rem #c7d2fe",
  },
  dropDwonTrigger: {
    border: "0",
    background: "transparent",
    cursor: "pointer",
    "& svg": {
      fill: "#606060",
    },
  },
  dropDownItemsWrapper: {
    background: "#ffffff",
    color: "#495057",
    border: "0",
    borderRadius: "6px",
    boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)",
    position: "absolute",
    textAlign: "left",
    width: "100%",
    zIndex: "1000",
    "& .dropDownItems": {
      padding: "0.75rem 0",
    },
  },
  dropDownItems: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
  },
  dropDownItem: {
    margin: "0",
    padding: " 0.75rem 1.25rem",
    border: "0",
    color: "#495057",
    background: "transparent",
    transition: "box-shadow 0.2s",
    borderRadius: 0,
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#495057",
      background: "#e9ecef",
    },
  },
});
