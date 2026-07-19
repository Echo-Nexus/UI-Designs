const Card = ({elem}) => {
  return (
    <>
      <a href={elem.url} target="_blank">
        <div className="h-40 w-44 bg-white rounded-2xl overflow-hidden">
          <img src={elem.download_url} alt="" className="h-full object-cover" />
        </div>
        <h2>{elem.author}</h2>
      </a>
    </>
  );
};

export default Card;
