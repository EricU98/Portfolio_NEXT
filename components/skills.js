import { Grid, Progress, Text, Row } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import currentSkills from "./data/skills/JSON/currentSkills.json";
import learningSkills from "./data/skills/JSON/learningSkills.json";
import wantSkills from "./data/skills/JSON/wantSkills.json";

export function CurrentSkills() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <Grid>
         {isClient &&
            Object.keys(currentSkills).map((key) => {
               const skill = currentSkills[key];
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

export function LearningSkills() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <Grid>
         {isClient &&
            Object.keys(learningSkills).map((key) => {
               const skill = learningSkills[key];
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

export function WantToLearnSkills() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   return (
      <Grid>
         {isClient &&
            Object.keys(wantSkills).map((key) => {
               const skill = wantSkills[key];
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
