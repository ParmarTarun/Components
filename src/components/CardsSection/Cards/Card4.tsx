import { FiSettings } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

const Card4 = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t";

  return (
    <div className="card4">
      <div className="card-content">
        <div className="card-tag-line">#tag1 #tag2</div>
        <div className="card-body">
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div className="card-action">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Card4;
