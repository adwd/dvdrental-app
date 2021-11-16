import { gql } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import { useHighestRatedFilmsPageQuery } from "../generated/graphql";
import { FilmCard } from "./FIlmCard";

const query = gql`
  query HighestRatedFilmsPage($filmCount: Int!) {
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
    <>
      <Box mt="1" fontWeight="bold" as="h1">
        レビュー評価の高い映画
      </Box>
      <Box my="1" fontWeight="semibold" as="h2">
        レンタルできる映画の総数: {data.films?.totalCount}, 表示件数 {filmCount}
      </Box>
      <Flex gap={6} wrap="wrap" gridGap={4}>
        {data.films?.nodes?.map((film) => (
          <FilmCard key={film?.id} film={film!} />
        ))}
      </Flex>
    </>
  );
};
