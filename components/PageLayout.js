import Layout from "./layout";
import Navbar from "./navbar";
import MainContainer from "./mainContainer";

export default function PageLayout({ children }) {
   return (
      <Layout>
         <MainContainer>{children}</MainContainer>
      </Layout>
   );
}
