import React from "react";

import ContentSectionCard from "./ContentSectionCard";

const ContentSection: React.FC = () => {
  const cardData = [
    {
      title: "リスト項目のタイトル1",
      content: "リスト項目の内容1",
      imageUrl: "/card-background-1.png",
    },
    {
      title: "リスト項目のタイトル2",
      content: "リスト項目の内容2",
      imageUrl: "/card-background-2.png",
    },
    {
      title: "リスト項目のタイトル3",
      content: "リスト項目の内容3",
      imageUrl: "/card-background-3.png",
    },
  ];

  return (
    <section className="py-10">
      <div className="container px-4 lg:px-0 mx-auto">
        <h2 className="text-2xl font-bold mb-4">セクションタイトル</h2>
        <p className="mb-4">テキストコンテンツ</p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((data, index) => (
            <ContentSectionCard
              key={index}
              title={data.title}
              content={data.content}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
