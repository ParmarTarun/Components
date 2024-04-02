import { FiSettings } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

const Card1 = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t";

  return (
    <div className="card1">
      <div className="card-header">
        <p>A Card 1 Title</p>
        <FiSettings />
      </div>
      <div className="card-body">
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
      </div>
      <div className="card-footer">
        <div className="tags">#tag1 #tag2</div>
        <div className="icons">
          <IoMdHeartEmpty />
          <GoReport />
        </div>
      </div>
    </div>
  );
};

export default Card1;
