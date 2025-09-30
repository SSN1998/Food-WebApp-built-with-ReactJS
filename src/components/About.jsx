const About = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-2xl font-bold mb-4">About Project</h2>
      <p className="mb-4">
        This is a <span className="font-semibold">Food Delivery</span> project
        inspired by popular web apps like{" "}
        <span className="font-semibold">Swiggy</span> and{" "}
        <span className="font-semibold">Zomato</span>. It integrates/uses live Swiggy
        APIs to fetch real-time restaurant and food data.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-medium">React.js</span> for building the UI
        </li>
        <li>
          <span className="font-medium">Redux</span> for state management
        </li>
        <li>
          <span className="font-medium">Tailwind CSS</span> for styling
        </li>
        <li>
          <span className="font-medium">GitHub</span> for version control
        </li>
        <li>
          <span className="font-medium">Vercel</span> for deployment
        </li>
      </ul>
    </section>
  );
};

export default About;
