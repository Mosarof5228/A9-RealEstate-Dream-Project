import PropTypes from "prop-types";
const PropertyCard = ({ property }) => {
  const { name, status, image } = property;

  return (
    <div className="">
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            className="object-cover h-56 w-full"
            src={image}
            alt="Property Photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold ">Tittle: {name}</h2>
          <div className="badge  badge-outline">{status}</div>
          <div className="card-actions my-4 justify-end">
            <button className="btn w-full   bg-[#00BBFF]">View Details</button>
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
