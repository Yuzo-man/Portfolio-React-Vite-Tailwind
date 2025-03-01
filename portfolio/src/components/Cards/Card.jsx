import React from 'react';

const Card = ({GrandTitle, title, title2, title3, description, description2,description3,description4}) => {
  return (
    <div className="px-6 py-4 bg-slate-50 bg-opacity-50 backdrop-blur-lg rounded-3xl shadow m-10">
      <div className="font-bold text-xl mb-2 text-center">{GrandTitle}</div>
      {title && <div className="text-lg mb-2 text-left text-gray-700">{title}</div>}
      <p className="text-black text-base text-justify">{description}</p>
      {title2 && <div className="text-lg mb-2 text-left text-gray-700">{title2}</div>}
      {description2 && <p className="text-black text-base text-justify">{description2}</p>}
      {title2 && <div className="text-lg mb-2 text-left text-gray-700">{title2}</div>}
      {description2 && <p className="text-black text-base text-justify">{description2}</p>}
      {title3 && <div className="text-lg mb-2 text-left text-gray-700">{title3}</div>}
      {description3 && <p className="text-black text-base text-justify">{description3}</p>}
    </div>
  );
};
export default Card;