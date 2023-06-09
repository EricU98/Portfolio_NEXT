import { Grid, Progress, Text, Row, Col } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const skills = {
   cSharp: {
      name: "C#",
      value: 90,
      color: "success",
   },
   html: {
      name: "HTML",
      value: 95,
      color: "primary",
   },
   css: {
      name: "CSS",
      value: 40,
      color: "error",
   },
   js: {
      name: "JavaScript",
      value: 85,
      color: "warning",
   },
   react: {
      name: "React",
      value: 60,
      color: "secondary",
   },
   next: {
      name: "Next.js",
      value: 50,
      color: "secondary",
   },
   node: {
      name: "Node.js",
      value: 90,
      color: "success",
   },
   mssql: {
      name: "MS SQL",
      value: 90,
      color: "success",
   },
};

export default function Skills() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <Grid>
         {isClient &&
            Object.keys(skills).map((key) => {
               const skill = skills[key];
               return (
                  <div key={key}>
                     <Row justify="space-between">
                        <Text h4>{skill.name}</Text>
                        <Text h4>{skill.value}%</Text>
                     </Row>
                     <Progress
                        size="lg"
                        value={skill.value}
                        color={skill.color}
                        status={skill.color}
                     />
                  </div>
               );
            })}
      </Grid>
   );
}
