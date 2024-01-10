import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY='2rem'>
      <Heading fontSize='md' color='gray.500' as="dt">{term}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
