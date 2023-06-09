import PageLayout from "../components/PageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "next-i18next";
import { Text, Row, Spacer } from "@nextui-org/react";

export async function getStaticProps({ locale }) {
   return {
      props: {
         ...(await serverSideTranslations(locale, ["common"])),
         // Will be passed to the page component as props
      },
   };
}

function MyAge() {
   const { t } = useTranslation("common");
   const [age, setAge] = useState("");

   useEffect(() => {
      const interval = setInterval(() => {
         const time = dayjs().diff(dayjs(894517200000), "year", true);
         setAge(time.toString().substring(0, 12));
      }, 50);

      // Bereinigt das Intervall, wenn die Komponente unmountet
      return () => clearInterval(interval);
   }, []);

   return (
      <div>
         <Row align="center" justify="center">
            <Text h3>{t("age_01")}</Text>
            <Text
               h3
               css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                  marginRight: "0.5rem",
                  marginLeft: "0.5rem",
                  fontWeight: "bold",
               }}
            >
               {age}
            </Text>

            <Text h3> {t("age_02")}</Text>
         </Row>
      </div>
   );
}

export default function Home({ props }) {
   return (
      <PageLayout>
         <MyAge />{" "}
      </PageLayout>
   );
}
