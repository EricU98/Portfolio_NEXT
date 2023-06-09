import PageLayout from "../../components/PageLayout";
import { useTranslation } from "next-i18next";
import { Text, Row, Spacer, Col, Progress, Grid } from "@nextui-org/react";
import Skills from "../../components/skills";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale, ["common"])),
         // Will be passed to the page component as props
      },
   };
}

export default function Home({ props }) {
   const { t } = useTranslation("common");
   return (
      <PageLayout>
         <Row justify="space-around">
            <Col span={8} css={{ margin: "0.5rem" }}>
               <Text h2>{t("skills.title_skills")}</Text>
               <Skills />
            </Col>
            <Col span={8} css={{ margin: "0.5rem" }}>
               <Text h2>{t("skills.title_learning")}</Text>
               <Text h2>{t("skills.title_want")}</Text>
            </Col>
         </Row>
      </PageLayout>
   );
}
