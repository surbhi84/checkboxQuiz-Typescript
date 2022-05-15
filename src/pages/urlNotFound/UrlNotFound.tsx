export const UrlNotFound = () => {
  return (
    <div className="flex-center flex-col mg-m">
      <img
        src="/assets/images/blankCanvas.svg"
        alt="not found image"
        className="w-30"
      />
      <p className="med-text">Ooops you entered a wrong url.</p>
    </div>
  );
};
