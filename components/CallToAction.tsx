import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container px-4 lg:px-0 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">アクション呼びかけタイトル</h2>
        <p className="text-lg mb-4">アクション呼びかけサブタイトル</p>
        <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded">
          CTAボタンテキスト
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
