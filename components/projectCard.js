import { useTranslation } from "next-i18next";
import React, { useState, useEffect } from "react";

import {
   Text,
   Row,
   Spacer,
   Col,
   Progress,
   Grid,
   Card,
   Link,
   Badge,
   Button,
} from "@nextui-org/react";
import projects from "./data/projects/projects.json";

export function ProjectCard(props) {
   const {
      title,
      altText,
      description,
      linkDesc,
      link,
      demoLink,
      demoLinkDesc,
      color,
   } = props;
   return (
      <Card css={{ p: "$6", mw: "400px" }}>
         <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
               <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                     {title}
                  </Text>
               </Grid>
               <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>{altText}</Text>
               </Grid>
            </Grid.Container>
         </Card.Header>
         <Card.Body css={{ py: "$2" }}>
            <Text>{description}</Text>
         </Card.Body>
         <Card.Footer>
            <Grid.Container justify="space-between">
               <Link href={link}>
                  <Text color="secondary">{linkDesc}</Text>
               </Link>

               <Badge size="lg" color={color}>
                  <Link color="inherit" href={demoLink}>
                     {demoLinkDesc}
                  </Link>
               </Badge>
            </Grid.Container>
         </Card.Footer>
      </Card>
   );
}

export function Projects() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <Grid.Container justify="space-between" gap={2}>
         {isClient &&
            Object.keys(projects).map((key) => {
               const project = projects[key];
               return (
                  <Grid key={key}>
                     <ProjectCard
                        title={project.title}
                        altText={project.altText}
                        description={project.description}
                        linkDesc={project.linkDesc}
                        link={project.link}
                        demoLink={project.demoLink}
                        demoLinkDesc={project.demoLinkDesc}
                        color={project.color}
                     ></ProjectCard>
                  </Grid>
               );
            })}
      </Grid.Container>
   );
}
