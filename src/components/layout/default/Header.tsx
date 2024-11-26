import { Styles } from "@/types/styles";
import AppBar from "@mui/material/AppBar";

const styles: Styles = {
  root: {
    backgroundColor: "hsl(180, 29%, 50%)",
    backgroundImage: {
      mobile: "url(/assets/images/bg-header-mobile.svg)",
      tablet: "url(/assets/images/bg-header-desktop.svg)",
    },
    backgroundSize: "cover",
    height: "156px",
  },
};

const Header = () => {
  return (
    <>
      <AppBar sx={[styles.root, styles.toolbar]} position={"relative"} />
    </>
  );
};

export default Header;
