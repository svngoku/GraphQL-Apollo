import { Movie, /*Actor*/ } from './types';
import { movies } from './mocks/movies';
import { categories } from './mocks/categories';
// import { actors } from  './mocks/actors';

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

// const getActorsForMovies = (movies_id: number): Actor[] => {
//   return actors.filter(movie => )
// }


// const getCategories = (categories: Array<Category>): any => {
//   categories.map(category => {
//     category.id
//     category.name
//   }); 

//   // return categories.find(categorie => categorie.id));
// };


export { getMoviesForCategory}
