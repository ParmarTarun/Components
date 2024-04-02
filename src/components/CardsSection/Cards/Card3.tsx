import { FaHeart } from "react-icons/fa";

const Card3 = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t";

  return (
    <div className="card3">
      <div className="card-header">
        <div>NEW</div>
        <div className="icons">
          <FaHeart />
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">
          <p>A Card 3 title</p>
        </div>
        <div className="card-desc">
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div className="card-images">
          <img src="https://placehold.co/75" alt="" />
          <img src="https://placehold.co/75" alt="" />
          <img src="https://placehold.co/75" alt="" />
        </div>
      </div>
      <div className="card-footer">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Card3;
