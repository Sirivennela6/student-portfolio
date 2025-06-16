const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800 text-gray-200 text-center py-4 text-sm md:text-base shadow-inner">
      &copy; {new Date().getFullYear()} Siri Vennela. All rights reserved.
    </footer>
  );
};

export default Footer;
