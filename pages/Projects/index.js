import PageLayout from "../../components/PageLayout";
import { useTranslation } from "next-i18next";
import { Projects } from "../../components/projectCard";
import {
   Text,
   Row,
   Spacer,
   Col,
   Progress,
   Grid,
   Card,
   Link,
} from "@nextui-org/react";

import styles from "./projects.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale, ["common"])),
         // Will be passed to the page component as props
      },
   };
}

export default function App() {
   return (
      <PageLayout>
         <Grid align="center">
            <Text
               h1
               size={60}
               css={{
                  textGradient: "45deg, $blue600 -20%, $green600 100%",
               }}
               weight="bold"
            >
               Meine Projekte
            </Text>
         </Grid>

         <Projects />
      </PageLayout>
   );
}
