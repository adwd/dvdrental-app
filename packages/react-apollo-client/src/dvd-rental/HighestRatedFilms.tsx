import { gql } from "@apollo/client";
import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHighestRatedFilmsPageQuery } from "../generated/graphql";
import { FilmCard } from "./FIlmCard";

const query = gql`
  query HighestRatedFilmsPage($filmCount: Int!) {
    actors(orderBy: FILM_ACTORS_COUNT_DESC, first: 3) {
      nodes {
        firstName
        lastName
        id
        filmActors {
          totalCount
        }
      }
    }

    films(first: $filmCount, orderBy: RENTAL_RATE_DESC) {
      totalCount
      nodes {
        ...FilmCard
      }
    }
  }
`;

const filmCount = 50;
export const HighestRatedFilmsPage = () => {
  const { data, loading, error } = useHighestRatedFilmsPageQuery({
    variables: { filmCount },
  });

  if (loading || !data) {
    return <>loading</>;
  }
  if (error) {
    return <>{error.message}</>;
  }

  return (
    <div style={{ margin: "16px" }}>
      <Heading as="h1" size="2xl">
        DVDレンタルストアのWebサイト
      </Heading>
      <Heading mt="4" as="h2" size="xl">
        人気の俳優
      </Heading>
      ()の中は出演本数
      <Box my="4">
        <UnorderedList>
          {data.actors?.nodes.map((actor) => (
            <ListItem key={actor?.id}>
              {actor?.firstName} {actor?.lastName} (
              {actor?.filmActors?.totalCount} 本)
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Heading mt="4" as="h2" size="xl">
        レビュー評価の高い映画
      </Heading>
      <Box my="1" fontWeight="semibold" as="h2">
        レンタルできる映画の総数: {data.films?.totalCount}, 表示件数 {filmCount}
      </Box>
      <Flex gap={6} wrap="wrap" gridGap={4}>
        {data.films?.nodes?.map((film) => (
          <FilmCard key={film?.id} film={film!} />
        ))}
      </Flex>
    </div>
  );
};
