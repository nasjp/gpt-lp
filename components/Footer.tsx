import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-around">
          <div>
            <h3 className="font-bold">ソーシャルリンク</h3>
            <ul className="list-none mt-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">連絡先情報</h3>
            <ul className="list-none mt-2">
              <li>住所</li>
              <li>電話</li>
              <li>メール</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>著作権情報</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
