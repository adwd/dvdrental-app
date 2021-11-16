import { Box, Badge } from "@chakra-ui/react";
import { FC } from "react";
import { FilmCardFragment } from "../generated/graphql";
import { ActorList } from "./ActorList";

export const FilmCard: FC<{ film: FilmCardFragment }> = ({ film }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w={300}
    >
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {film?.rentalRate}
          </Badge>
          {film?.filmCategories?.nodes.map((filmAndCategory) => (
            <Box
              as="span"
              ml="2"
              color="gray.600"
              fontSize="sm"
              key={filmAndCategory?.id}
            >
              {filmAndCategory?.category?.name}
            </Box>
          ))}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {film?.releaseYear} &bull; 貸出し {film?.rentalDuration} 日
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4">
          {film?.title}
        </Box>

        <Box mt="1" fontSize="small">
          {film?.description}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {film?.filmActors.nodes?.map((actorAndFilm) => (
            <ActorList key={actorAndFilm?.id} actor={actorAndFilm?.actor!} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
