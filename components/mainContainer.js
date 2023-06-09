import { Container, Card, Col, Text, Spacer } from "@nextui-org/react";
import Navbar from "./navbar";

export default function MainContainer({ children }) {
   return (
      <>
         <Navbar />
         <Spacer y={1} />
         <Container>
            <Card>
               <Card.Body>
                  <Col justify="center">{children}</Col>
               </Card.Body>
            </Card>
         </Container>
      </>
   );
}
