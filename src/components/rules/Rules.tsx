export const Rules = () => {
  return (
    <>
      {/* <!-- Rules div --> */}
      <div className="rules-div flex-col flex-center pd-m">
        <h1 className="heading marg-un">checkBox Rules</h1>
        {/* <!-- Rules --> */}
        <ol>
          <li className="mg-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,sdsds
            voluptas?
          </li>
          <li className="mg-xs">
            Lorem ipsum dolor sit, amet consectetur adipisfsicing elit. Rem,
            voluptas?
          </li>
          <li className="mg-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            voluptas?
          </li>
          <li className="mg-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            voluptas?
          </li>
          <li className="mg-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            voluptas?
          </li>
        </ol>
        <label>
          <input type="checkbox" />I agree to checkBox Rules.
        </label>
        {/* <!-- end of rules --> */}
        <a
          href="/pages/quizQues/"
          className="play-btn outline-btn text-dec-none med-text mg-s"
        >
          Lets go!
        </a>
      </div>
      {/* <!-- end of rules div --> */}
    </>
  );
};
