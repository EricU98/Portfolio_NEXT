import React from "react";
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
   Link,
   Badge,
   Col,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";

export default function AboutModal() {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const { t } = useTranslation("common");
   const closeHandler = () => {
      setVisible(false);
      console.log("closed");
   };

   return (
      <div>
         <Link color="inherit" onClick={handler}>
            {t("btn_thisPage")}
         </Link>
         <Modal
            closeButton
            width="890px"
            blur
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={18}>
                  {t("aboutModal.title")}

                  <Text b size={18} css={{ marginLeft: "0.4rem" }}>
                     {t("aboutModal.portfolio")}
                  </Text>
               </Text>
            </Modal.Header>
            <Text align="center" size="$xl">
               {t("aboutModal.technologies")}
            </Text>{" "}
            <Modal.Body>
               <Col>
                  <br />{" "}
                  {
                     <Text>
                        <Badge
                           isSquared
                           size="lg"
                           color="success"
                           variant="flat"
                        >
                           React:
                        </Badge>
                        {t("aboutModal.react")}
                     </Text>
                  }
                  <Text>
                     <Badge isSquared size="lg" color="warning" variant="flat">
                        Next.js:
                     </Badge>
                     {t("aboutModal.nextjs")}
                  </Text>
                  <Text>
                     <Badge isSquared size="lg" color="primary" variant="flat">
                        NextUI:
                     </Badge>
                     {t("aboutModal.nextui")}
                  </Text>
                  <Text>
                     <Badge isSquared size="lg" color="error" variant="flat">
                        next-i18next:
                     </Badge>
                     {t("aboutModal.nexti18next")}
                  </Text>
               </Col>
            </Modal.Body>
            <Modal.Footer>
               <Button auto flat color="error" onPress={closeHandler}>
                  {t("aboutModal.close")}
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
