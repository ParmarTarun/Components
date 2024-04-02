import "./styles.css";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

// add the component to src/components/index.tsx file to render
const CardsSection = () => {
  return (
    <div className="cards-component">
      <div className="heading">
        <h3>Cards</h3>
      </div>
      <div className="cards-wrapper">
        {
          <>
            <div className="vertical-cards">
              <Card2 />
              <Card3 />
            </div>
            <div className="horizontal-cards">
              <Card1 />
              <Card4 />
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default CardsSection;
