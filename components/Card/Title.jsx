const Title = ({ title, category }) => {
  return (
    <div className="top-0 left-0">
      <h2 className="text-white text-md uppercase underline underline-offset-4 my-4 text-center mx-3">
        {category}
      </h2>
      <h2 className="text-[#faebd7] max-w-xl lg:text-justify text-center mx-3">
        {title}
      </h2>
    </div>
  );
};

export default Title;
