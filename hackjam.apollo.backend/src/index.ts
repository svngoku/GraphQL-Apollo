import { ApolloServer, gql } from 'apollo-server';
import { movies } from './mocks/movies';
import { categories } from './mocks/categories';
import { Movie, Category } from './types';
import { getMoviesForCategory } from './utils';

// TypeDef definies les regles 
const typeDefs = gql`

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

  type Category {
    id: ID
    name: String!
    movies: [Movie!]!
  }

  type Query {
    hello: String!,
    getMovies: [Movie!]!,
    getCategories: [Category!]!
    
  }

  # type Subscription {
  #   voteAdded: Movie!
  # }

  type Mutation {
    addVote(movie_id: ID!): Movie!
  }
`;

// Resoud les définitions
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getMovies: () => movies,
    getCategories: () => categories,

  },

  Movie: {
    categories: (movies: Movie) => {
     return movies.category_ids.map(id => categories.find(categorie => categorie.id === id));
    }
  },
  Category: {
    movies: (Category:Category) => {
      return getMoviesForCategory(Category.name);
    }
  },
  Mutation: {
    addVote: (_, args) => {
      return movies.find(movie => movie.id === Number(args.movie_id));
    }
  },
  // Subscription: {
  //   voteAdded: {
  //     subscribe: () => pubsub.asyncIterator(["voteAdded"])
  //   }
  // }
};

const server: ApolloServer = new ApolloServer({
  typeDefs, resolvers
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
