import PageLayout from "../../components/PageLayout";
import { useTranslation } from "next-i18next";
import { Text, Row, Spacer, Col, Progress, Grid } from "@nextui-org/react";
import {
   CurrentSkills,
   LearningSkills,
   WantToLearnSkills,
} from "../../components/skills";
import styles from "./skills.module.css";
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
            <Col
               className={styles.skillContainer}
               span={8}
               css={{ margin: "0.5rem" }}
            >
               <Text h2>{t("skills.title_skills")}</Text>
               <CurrentSkills />
            </Col>
            <Col span={8} css={{ margin: "0.5rem" }}>
               <div className={styles.skillContainer}>
                  <Text h2>{t("skills.title_learning")}</Text>
                  <LearningSkills />
               </div>
               <Spacer y={1} />
               <div className={styles.skillContainer}>
                  <Text h2>{t("skills.title_want")}</Text>
                  <WantToLearnSkills />
               </div>
            </Col>
         </Row>
      </PageLayout>
   );
}
