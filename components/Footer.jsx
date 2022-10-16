const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-4 p-10 bg-gray-100 md:px-12 lg:px-20">
      <div className="space-y-3 text-xs text-gray-600">
        <h4 className="font-bold">Support</h4>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Out COVID-19 Response</p>
      </div>
      <div className="space-y-3 text-xs text-gray-600">
        <h4 className="font-bold">Hosting</h4>
        <p>Try Hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit out community forums</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-3 text-xs text-gray-600">
        <h4 className="font-bold">Airbnb</h4>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
      </div>
      <div className="space-y-3 text-xs text-gray-600">
        <h4 className="font-bold">Community</h4>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>
    </footer>
  );
};

export default Footer;
