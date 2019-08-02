import { movies } from './mocks/movies';
import { categories } from './mocks/categories';
import { getMoviesForCategory } from './utils';
import { Movie , Category } from './types';

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      getMovies: () => {
        return movies;
      },
      getCategories: () => {
        return categories;
      }
  
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
    // Mutation: {
    //   addVote: (_, args) => {
    //     return movies.find(movie => movie.id === Number(args.movie_id));
    //   }
    // },
    // Subscription: {
    //   voteAdded: {
    //     subscribe: () => pubsub.asyncIterator(["voteAdded"])
    //   }
    // }
  };

export { resolvers };