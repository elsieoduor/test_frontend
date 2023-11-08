import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hands from "../../assets/images/helpinghand.jpg";
import child4 from "../../assets/images/children4.jpg";
import child3 from "../../assets/images/children3.jpg";
import child2 from "../../assets/images/children2.jpg";


const About = () => {
  // const Slider = () => {
    const slides = [
      {
        image: child4,
        text: 'Text Overlay 1',
      },
      {
        image: child3,
        text: 'Text Overlay 2',
      },
      {
        image: child2,
        text: 'Text Overlay 2',
      },
    ];
  const projectData = [
    {
      id: 1,
      title: 'Fundraising For Children',
      imageUrl: hands,
      description: 'Description for Project 1.',
    },
    {
      id: 2,
      title: 'Volunteer For A Cause',
      imageUrl: hands,
      description: 'Description for Project 2.',
    },
    {
      id: 2,
      title: 'Education Impact',
      imageUrl: hands,
      description: 'Description for Project 2.',
    },
    // Add more project data as needed
  ];
  const aboutUs = [
    {
      id: 1,
      title: 'Our Mission',
      imageUrl: hands,
      description: 'Hearts to homes strives to provide helpless children with basic necessities, education, and reliable health services.But without your support and donations, we won’t be able to do what we do today!Yes, with the fundraising option, you can convince more people to participate in the cause of meeting the needs of the orphans!',
    },
    {
      id: 2,
      title: 'Our Vision',
      imageUrl: hands,
      description: 'Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.',
    },
    {
      id: 2,
      title: 'Our Values',
      imageUrl: hands,
      description: 'Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.',
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
     <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
           <img src={slide.image} alt={`Slide ${index}`} className="h-96 max-w-none w-3/4 object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold">{slide.text}</h2>

            </div>
          </div>
        ))}
      </Carousel>
      <div className="text-center mt-10">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <p className="text-xl mb-4">Some text description here, still centered.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Go to About Page</a>
      </div>

  
      <section className="text-center w-full my-10">
      <p className="text-3xl font-bold mb-4">About Us</p>
      <div className="flex flex-wrap justify-center">
        {aboutUs.map((aboutUs) => (
          <div key={aboutUs.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
            <img src={aboutUs.imageUrl} alt={aboutUs.title} className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white">
              <p>{aboutUs.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


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
