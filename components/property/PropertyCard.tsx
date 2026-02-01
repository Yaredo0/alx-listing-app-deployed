import { FC } from "react";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    image: string;
  };
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-md p-4">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{property.name}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-bold">${property.price}</p>
    </div>
  );
};

export default PropertyCard;