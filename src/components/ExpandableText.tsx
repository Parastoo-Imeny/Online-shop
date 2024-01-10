import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 60;
  if (children.length <= limit) return <Text>{children}</Text>;
  
  const summary = expanded ? children : children.substring(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button marginLeft='0.5rem' size='xs' colorScheme="yellow" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
