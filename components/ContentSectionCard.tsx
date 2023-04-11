import React from "react";

interface Props {
  title: string;
  content: string;
  imageUrl: string;
}

const ContentSectionCard: React.FC<Props> = ({ title, content, imageUrl }) => {
  return (
    <div
      className="bg-cover bg-center rounded-md shadow-md p-6"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
      <p className="text-white mb-4">{content}</p>
    </div>
  );
};

export default ContentSectionCard;
