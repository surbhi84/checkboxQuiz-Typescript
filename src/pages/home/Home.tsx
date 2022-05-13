import { Header, Footer } from "components";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-center flex-row main">
        <img src="/assets/images/test.svg" className="main-img" />
        <div className="flex-col flex-center ">
          <h2 className="mg-sm">Welcome to checkBox,</h2>
          <p className="med-text ">
            A quiz app specifically designed for developers to have fun and
            learn altogether.
          </p>

          <h2>Are you ready?</h2>
          <h1>Then lets begin!</h1>
          <a
            className="outline-btn cta-btn med-text text-dec-none"
            href="/pages/quizCategories/"
          >
            Choose Category
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};
