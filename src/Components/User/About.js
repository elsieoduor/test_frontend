import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import child4 from "../../assets/images/children4.jpg";
import child3 from "../../assets/images/children3.jpg";
import child2 from "../../assets/images/children2.jpg";

const About = () => {
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
      imageUrl: "https://i.pinimg.com/564x/8a/ae/89/8aae89e3001a337ee1a634308f82c2dc.jpg",
      description: 'Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.',
    },
    {
      id: 2,
      title: 'Volunteer For A Cause',
      imageUrl: "https://i.pinimg.com/564x/46/fd/e0/46fde097add6854642563b004b68bd3f.jpg",
      description: 'If you’re interested in joining our cause, simply contact us and communicate the days and times when you are available. You may also include any additional personal information you like to share, including your skills, interests, projects, or areas of service. We’ll go through your application and get back to you as soon as possible!',
    },
    {
      id: 3,
      title: 'Education Impact',
      imageUrl: "https://i.pinimg.com/564x/a7/b8/b8/a7b8b84fcfd0eb033b4de938d0b95ba9.jpg",
      description: 'Providing better educational opportunities to orphans, we empower them to complete their basic as well as advanced schooling',
    },
  ];

  const aboutUs = [
    {
      id: 1,
      title: 'Our Mission',
      imageUrl: "https://i.pinimg.com/564x/05/4c/f3/054cf3b65f0bdb00d2b0662130d2e3fc.jpg",
      description: 'Hearts to homes strives to provide helpless children with basic necessities, education, and reliable health services. But without your support and donations, we won’t be able to do what we do today! Yes, with the fundraising option, you can convince more people to participate in the cause of meeting the needs of the orphans!',
    },
    {
      id: 2,
      title: 'Our Vision',
      imageUrl: "https://i.pinimg.com/564x/35/66/b7/3566b7467bc35f6cd57a30af3d4f6be8.jpg",
      description: 'Our main aim is to address and solve all current and potential issues faced by orphan children. Partnering with organizations and public support groups, we organize multiple programs with constant strife to promote the welfare of orphans.',
    },
    {
      id: 3,
      title: 'Our Values',
      imageUrl: "https://i.pinimg.com/564x/dc/17/de/dc17de177f4b22d1d0b5b1eb206e6468.jpg",
      description: 'Helping registered orphans and their support communities to improve the educational framework in their region is our top priority.',
    },
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
        <p className="text-xl mb-4">When You Loose A Parent,You Realise How Important They Are To The Foundation Of Your Life.</p>
        <a href="/about" className="text-blue-500 hover:underline block mb-8">Help Us Put A Smile On A DUll Face.</a>
      </div>

      <section className="text-center w-full my-10">
        <p className="text-3xl font-bold mb-4">WHAT WE DO.!!</p>
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

      <section className="text-center w-full my-10">
  <p className="text-3xl font-bold mb-4">Location</p>
  <p className="text-lg mb-2">Regions Covered...</p>
  <p className="text-sm mb-4">Our organisation operates in the following regions...</p>
  <div className="flex justify-center mb-8">
    <div className="w-full max-w-[700px]">
      {locationData.map((location, index) => (
        <div key={location.id} className="bg-white p-4 mb-4 rounded shadow-lg">
          <p className="text-xl font-semibold mb-2">Name:</p>
          <p className="text-lg mb-2">Location: {location.city}, {location.country}</p>
          {index !== locationData.length - 1 && <hr className="border-t-2 border-gray-300 my-4" />}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* <section className="text-center w-full my-10">
  <p className="text-3xl font-bold mb-4">Location</p>
  <p className="text-lg mb-2">Regions Covered...</p>
  <p className="text-sm mb-4">Our organisation operates in the following regions...</p>
  <table className="w-full bg-zinc-300 mt-4">
    <thead>
      <tr>
        <th className="text-black text-2xl font-medium p-4">Name</th>
        <th className="text-black text-2xl font-medium p-4">Location</th>
      </tr>
    </thead>
    <tbody>
      {locationData.map((location) => (
        <tr key={location.id}>
          <td className="text-black text-2xl font-medium p-4">Name:</td>
          <td className="text-black text-lg p-4">Location: {location.city}, {location.country}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section> */}

      {/* <section className="text-center w-full my-10">
  <p className="text-3xl font-bold mb-4">Location</p>
  <p className="text-lg mb-2">Regions Covered...</p>
  <p className="text-sm mb-4">Our organisation operates in the following regions...</p>
  <div className="bg-zinc-300 flex w-full justify-between gap-5 pl-11 pr-52 pt-4 pb-12">
    <div className="text-black text-2xl font-medium grow shrink basis-auto">
      Name
    </div>
    <div className="text-black text-2xl font-medium grow shrink basis-auto">
      Location
    </div>
  </div>
  <div className="bg-zinc-300 self-stretch mt-4 pl-11 pr-52 pt-2 pb-6">
    <div className="flex items-stretch w-full">
      <div className="flex flex-col items-stretch w-[65%] ml-0">
        {locationData.map((location) => (
          <div key={location.id} className="flex flex-col items-stretch mt-5">
            <div className="justify-center text-black text-2xl font-medium mb-2">
              Name:
            </div>
            <div className="justify-center text-black text-lg mb-2">
              Location: {location.city}, {location.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}

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
