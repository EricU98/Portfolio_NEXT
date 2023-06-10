import PageLayout from "../../components/PageLayout";
import ContactButton from "../../components/contactButton";
import { Grid, Text, Row } from "@nextui-org/react";

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
            <Text h2>So kannst du mich erreichen</Text>
         </Grid>
         <Row justify="space-around" direction="row">
            <ContactButton
               text="E-Mail"
               color="success"
               link="mailto:eric.uteg@web.de"
            />
            <ContactButton
               text="Discord"
               color="primary"
               link="mailto:eric.uteg@web.de"
            />
            <ContactButton
               text="Github"
               color="secondary"
               link="mailto:eric.uteg@web.de"
            />
         </Row>
      </PageLayout>
   );
}
