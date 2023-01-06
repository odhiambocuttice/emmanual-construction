const Title = ({ title, category }) => {
  return (
    <div className="top-0 left-0">
      <span className="text-white text-sm uppercase">{category}</span>
      <h2 className="text-[#faebd7]">{title}</h2>
    </div>
  );
};

export default Title;
