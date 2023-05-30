import { ArticleTypes } from "../../../types/ArticleTypes";
import img from '../../../../public/example.jpeg'

const Article = ({ title, text, tags, image, alt }: ArticleTypes) => {
  return (
    <div className="card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag, index: number) => (
          <span key={index} className="tags">{tag}</span>
        ))}
      </div>
      <div className="grid gap-1 ">
        {text.map((item, index: number) => (
          <div key={index}>
            <p
              className="text-alura-200 dark:text-gray-400"
            >{item}</p>
            {image && <img className="sm:p-4" src={img} />}
            {image && alt && <span className="sr-only">{alt}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Article;
