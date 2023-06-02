import NotFoundSvg from "/@/assets/NotFoundSvg";

const NotFound = () => {
  return (
    <div className=" w-full">
      <button
        onClick={() => window.history.back()}
        className="text-">{'< Voltar'}</button>
      <div className="flex justify-center">
        <NotFoundSvg />
      </div>
    </div>
  )
}

export default NotFound;
