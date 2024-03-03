import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 250}}>
      <Link href="/">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-4">TaskTie</span>
        </a>
      </Link>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link active" aria-current="page">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/clientList">
            <a className="nav-link link-dark">顧客一覧</a>
          </Link>
        </li>
        {/* その他のメニュー項目 */}
      </ul>
    </div>
  );
};

export default Menu;