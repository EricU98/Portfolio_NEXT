import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { GithubIcon } from "./icons/GithubIcon.js";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./languageSwitch.js";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import AboutModal from "./aboutModal.js";

export default function CustomNavbar({}) {
   const { t } = useTranslation("common");
   const router = useRouter();
   const locale = router.locale || "";

   return (
      <Navbar>
         <Navbar.Brand>
            <Text
               b
               as={Link}
               href={`/${locale}`}
               color="inherit"
               hideIn="xs"
               css={{
                  textGradient: "45deg, $green600 10%, $red600 50%",
               }}
               weight="bold"
            >
               {t("title")}
            </Text>
         </Navbar.Brand>
         <Navbar.Content hideIn="xs">
            <Navbar.Link href={`/${locale}/Skills`}>
               {t("btn_skills")}
            </Navbar.Link>
            <Navbar.Link href={`/${locale}/Projects`}>
               {t("btn_projects")}
            </Navbar.Link>
            <Navbar.Link href={`/${locale}/Contact`}>
               {" "}
               {t("btn_contact")}
            </Navbar.Link>
            <Navbar.Link href="#">{t("btn_about")}</Navbar.Link>
            <AboutModal />
         </Navbar.Content>
         <Navbar.Content>
            <LanguageSwitcher />
            <Button
               icon={<GithubIcon fill="currentColor" />}
               color="secondary"
               shadow
               as={Link}
               href="https://github.com/EricU98"
            >
               @EricU98
            </Button>
            <Navbar.Item>
               <Button
                  color="success"
                  shadow
                  auto
                  as={Link}
                  href="mailto:eric.uteg@web.de"
               >
                  E-Mail
               </Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
}
