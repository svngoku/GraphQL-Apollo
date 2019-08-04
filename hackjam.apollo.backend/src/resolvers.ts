import { movies } from './mocks/movies';
import { categories } from './mocks/categories';
import { getMoviesForCategory } from './utils';
import { Movie , Category } from './types';
import { actors } from './mocks/actors';


const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      getMovies: () => movies,
      getCategories: () => categories,
      getActors: () => actors,
    },
  
    Movie: {
      categories: (movies: Movie) => {
       return movies.category_ids.map(id => 
          categories.find(categorie => categorie.id === id));
      } 
    },
    Category: {
      movies: (Category:Category) => {
        return getMoviesForCategory(Category.name);
      }
    },
    // Actor: {
    //   movies: (movies: Movie) => .id.map(id => movie. === id)
    // },
    Mutation: {
      //  addVote: (_, args) => { 
	    //    return movies.find(movie => movie.id === Number(args.movie_id));
      //  },
       addActor: (_, args) => {
          const actor = { ...args.data };
          actors.push(actor);
          return actors;
       }
    },
    // Subscription: {
    //   voteAdded: {
    //     subscribe: () => pubsub.asyncIterator(["voteAdded"])
    //   }
    // }
  };

export { resolvers };
