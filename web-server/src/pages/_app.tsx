import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSS
import Menu from '../components/Menu';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Menu /> {/* Menuコンポーネントを挿入 */}
        </div>
        <div className="col-md-9">
          <Component {...pageProps} /> {/* 各ページのメインコンテンツ */}
        </div>
      </div>
    </div>
  )
}
