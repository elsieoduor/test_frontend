import React from 'react';
import hands from "../../assets/images/helpinghand.jpg";

const About = () => {
  const projectData = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: hands,
      description: 'Description for Project 1.',
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: hands,
      description: 'Description for Project 2.',
    },
    // Add more project data as needed
  ];
  const locationData = [
    {
      id: 1,
      city: 'City 1',
      country: 'Country 1',
    },
    {
      id: 2,
      city: 'City 2',
      country: 'Country 2',
    },
    {
      id: 3,
      city: 'City 3',
      country: 'Country 3',
    },
    {
      id: 4,
      city: 'City 4',
      country: 'Country 4',
    },
    {
      id: 5,
      city: 'City 5',
      country: 'Country 5',
    },
  ];

  return (
    <>
      <div className="text-center mt-10">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <p className="text-xl mb-4">Some text description here, still centered.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Go to About Page</a>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Three cards - Example */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 1</div>
            <p className="text-gray-700 text-base">
              Description for Card 1.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 2</div>
            <p className="text-gray-700 text-base">
              Description for Card 2.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={hands} alt="About" className="w-full lg:w-80 h-90" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 3</div>
            <p className="text-gray-700 text-base">
              Description for Card 3.
            </p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <section className="text-center w-full my-10">
      <p className="text-3xl font-bold mb-4">Projects</p>
      <div className="flex flex-wrap justify-center">
        {projectData.map((project) => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
            <img src={project.imageUrl} alt={project.title} className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

        {/* Location Section */}
        <section className="w-full my-10">
      <p className="text-3xl font-bold mb-4">Location</p>
      <table className="w-full">
        <tbody>
          {locationData.map((location) => (
            <tr key={location.id} className="border-b">
              <td className="py-2 pr-4 text-xl font-semibold">{location.city}</td>
              <td className="py-2 text-base">{location.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
        {/* Donate Now Banner */}
    <section className="text-center bg-gray-200 py-10 flex justify-between items-center">
      <div>
        <p className="text-4xl font-bold mb-4">Donate Now</p>
        <p>Support us and make a difference.</p>
      </div>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Donate</button>
      </div>
    </section>
      
    </>
  );
};

export default About;
