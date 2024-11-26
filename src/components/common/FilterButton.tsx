import { StyleObj, Styles } from "@/types/styles";
import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

type FilterButtonProps = Omit<MuiButtonProps, "sx"> & {
  sx?: StyleObj | StyleObj[];
};

const styles: Styles = {
  root: {
    fontWeight: "bold",
  },
  colorSecondary: {
    "&:hover": {
      backgroundColor: "primary.main",
      color: "primary.contrastText",
    },
  },
};

const FilterButton = ({
  children,
  sx,
  size = "small",
  color = "secondary",
  variant = "contained",
  ...props
}: FilterButtonProps) => {
  return (
    <Button
      sx={[
        styles.root,
        color === "secondary" ? styles.colorSecondary : {},
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
      color={color}
      variant={variant}
      size={size}
      disableElevation
      {...props}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
