const Footer = () => {
  return (
    <footer className="bg-amber-100 text-gray-950 px-8 py-10 h-[230px]">
      {" "}
      <div className="max-w-screen-xl mx-auto">
        {" "}
        <h2 className="text-gray-950 text-lg font-semibold mb-6">
          {" "}
          Questions? Contact us.{" "}
        </h2>{" "}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {" "}
          <a href="#" className="!no-underline hover:underline">
            {" "}
            FAQ{" "}
          </a>{" "}
          <a href="#" className="hover:underline">
            {" "}
            Help Center{" "}
          </a>{" "}
          <a href="#" className="hover:underline">
            {" "}
            Terms of Use{" "}
          </a>{" "}
          <a href="#" className="hover:underline">
            {" "}
            Privacy{" "}
          </a>{" "}
        </div>{" "}
        <p className="text-xs text-gray-500">
          {" "}
          &copy; 2025 BaTu, Inc. All rights reserved.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
