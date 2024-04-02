const Card2 = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t";

  return (
    <div className="card2">
      <div className="card-image">
        <img src="https://placehold.co/600x400/png" alt="" />
      </div>
      <div className="card-header">A Card 2 Title</div>
      <div className="card-body">
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
      </div>
      <div className="card-footer">
        <img src="https://placehold.co/50" alt="" />
        <img src="https://placehold.co/50" alt="" />
        <img src="https://placehold.co/50" alt="" />
      </div>
    </div>
  );
};

export default Card2;
