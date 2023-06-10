import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import styles from "../styles/navbar.module.css";

export default function LanguageSwitcher() {
   const router = useRouter();

   const changeLanguage = (language) => {
      router.push(router.pathname, router.asPath, { locale: language });
   };

   return (
      <div className={styles.languageContainer}>
         <Button.Group ghost color="success">
            <Button onPress={() => changeLanguage("de")}>DE</Button>
            <Button onPress={() => changeLanguage("en")}>EN</Button>
         </Button.Group>
      </div>
   );
}
