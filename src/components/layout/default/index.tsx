import Header from "@/components/layout/default/Header";
import { Styles } from "@/types/styles";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};
const styles: Styles = {
  container: {
    padding: "16px",
  },
};
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Container maxWidth={"desktop"} sx={styles.container}>
        {children}
      </Container>
    </>
  );
};

export default DefaultLayout;
