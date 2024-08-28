import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PropertyCard = ({ property }) => {
  const { name, status, image, id } = property;

  return (
    <div className="">
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            className=" transition-transform duration-500 ease-in-out transform hover:scale-150 object-cover h-56 w-full"
            src={image}
            alt="Property Photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold ">Tittle: {name}</h2>
          <div className="badge  badge-outline">{status}</div>
          <div className="card-actions my-4 justify-end">
            <Link
              to={`/propertyDetails/${id}`}
              className="btn w-full   bg-[#00BBFF]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
PropertyCard.propTypes = {
  property: PropTypes.node,
};
export default PropertyCard;
