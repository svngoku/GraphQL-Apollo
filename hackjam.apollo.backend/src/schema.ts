import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: ID
    title: String!
    vote_count: String!
    video: String!
    vote_average: String!
    popularity: String!
    poster_path: String!
    original_language: String!
    original_title: String!
    categories: [Category!]!
    backdrop_path: String!
    adult: String!
    overview: String!
    release_date: String!
  }

  type Actor {
    id: ID
    name: String
    movies: [Movie]!
  }

  type Category {
    id: ID
    name: String!
    movies: [Movie!]!
  }

  type Query {
    hello: String!
    getMovies: [Movie!]!
    getCategories: [Category!]!
    getActors:  [Actor!]

  }

  type Mutation {
    addActor(data: AddActorInput): Actor!
  }

  input AddActorInput {
    id: ID
    name: String
  }
`;