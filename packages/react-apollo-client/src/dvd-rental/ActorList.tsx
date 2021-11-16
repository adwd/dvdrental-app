import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ActorListFragment } from "../generated/graphql";
import { gql } from "@apollo/client";

const fragment = gql`
  fragment ActorList on Actor {
    id
    lastName
    firstName
  }
`;

export const ActorList: FC<{ actor: ActorListFragment }> = ({ actor }) => {
  return (
    <Box as="span" ml="2" color="gray.600" fontSize="sm" key={actor?.id}>
      {actor?.firstName} {actor?.lastName}
    </Box>
  );
};
