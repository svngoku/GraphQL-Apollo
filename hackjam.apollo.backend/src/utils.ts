import { Movie, /* Category */} from './types';
import { movies } from './mocks/movies';
import { categories } from './mocks/categories';

const getMoviesForCategory = (categoryName: string): Movie[] => {
  return movies.filter(movie =>
    movie.category_ids
      .map(categoryId =>
        categories
          .find(category => category.id === categoryId)
          .name.toUpperCase()
      )
      .includes(categoryName.toUpperCase())
  );
};


// const getCategories = (categories: Array<Category>): any => {
//   categories.map(category => {
//     category.id
//     category.name
//   }); 

//   // return categories.find(categorie => categorie.id));
// };


export { getMoviesForCategory}
