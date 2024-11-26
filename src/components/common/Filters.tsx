"use client";

import { useFilter } from "@/hooks/use-filter";
import { Styles } from "@/types/styles";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";

const styles: Styles = {
  root: {
    padding: "16px",
    backgroundColor: "background.paper",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    top: "-48px",
    position: "relative",
    marginBottom: "-24px",
  },
  filterBtn: {
    "&:hover": {
      cursor: "unset",
    },
  },
  filterTextBtn: {
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "secondary.main",
      cursor: "unset",
    },
  },

  removeFilterBtn: {
    padding: "4px",
    minWidth: "unset !important",
    svg: {
      fontSize: "16px",
    },
    "&:hover": {
      backgroundColor: "info.main",
      cursor: "pointer",
    },
  },
  clearBtn: {
    color: "text.secondary",
    fontWeight: "bold",
    "&:hover": {
      background: "inherit",
      textDecoration: "underline",
      color: "primary.main",
    },
  },
};

const Filters = () => {
  const { filters, onClearFilter, onRemoveFilter } = useFilter();

  if (filters.length === 0) {
    return null;
  }

  return (
    <Stack
      sx={styles.root}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"24px"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"16px"}
        flexWrap={"wrap"}
      >
        {filters.map((filter) => (
          <ButtonGroup
            sx={styles.filterBtn}
            key={`${filter.type}-${filter.text}`}
            variant="contained"
            color={"secondary"}
            size={"small"}
            disableElevation
          >
            <Button sx={styles.filterTextBtn} disableFocusRipple>
              {filter.text}
            </Button>
            <Button
              sx={styles.removeFilterBtn}
              color={"primary"}
              size="small"
              onClick={() => onRemoveFilter(filter)}
            >
              <CloseIcon />
            </Button>
          </ButtonGroup>
        ))}
      </Stack>
      <Button sx={styles.clearBtn} variant={"text"} onClick={onClearFilter}>
        Clear
      </Button>
    </Stack>
  );
};

export default Filters;
