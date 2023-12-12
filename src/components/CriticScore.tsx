import { Badge } from "@chakra-ui/react";
import { Rating } from "./hooks/useProducts";

interface Props {
  rating: Rating;
}

export const CriticScore = ({ rating }: Props) => {
  const color = rating.rate > 4 ? "green" : rating.rate > 3 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="0.9rem"
      paddingX={2}
      borderRadius="4px"
    >
      {rating.rate}
    </Badge>
  );
};
