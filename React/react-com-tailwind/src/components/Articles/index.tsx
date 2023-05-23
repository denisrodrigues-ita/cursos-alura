import Data from '../../services/data'
import { ArticleTypes } from '../../types/ArticleTypes';
import Article from './Article';

const ArticleList = () => {
  const articles = Data();
  console.log(articles)

  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
      {articles.map((item: ArticleTypes, index: number) => <Article key={index} {...item} />
      )}
    </div>
  )
}

export default ArticleList;
