import { Button, Grid, Text, Link } from "@nextui-org/react";

export default function ContactButton(props) {
   const { text, link, color } = props;
   return (
      <Button as={Link} href={link} color={color} shadow size="xl">
         <Text weight="bold" size="$2xl" color="inherit">
            {text}
         </Text>
      </Button>
   );
}
