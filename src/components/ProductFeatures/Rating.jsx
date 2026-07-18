import { FaStar } from "react-icons/fa";

function Rating({ rating = 4 }) {

  return (
    <div
      style={{
        color: "#FFC107",
        margin: "10px 0",
        display: "flex",
        gap: "4px"
      }}
    >
      {[1,2,3,4,5].map((star) => (
        <FaStar
          key={star}
          color={star <= rating ? "#FFC107" : "#ddd"}
        />
      ))}
    </div>
  );
}

export default Rating;