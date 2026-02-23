const Footer = () => {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Isaac Muli. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
