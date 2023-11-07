import React from 'react'

const Contact = () => {
  // const handleSocialClick = (link) => {
  //   window.open(link, '_blank');
  // };

  return (
    <div className="lg:mx-32 mt-8 lg:mt-16 mb-10">
    <p className="text-center text-3xl font-bold mb-4">Contact</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Contact us:</h3>
          <ul>
            <li className="mb-2">
              <a href="social_link_1" className="text-black-500 hover:underline">Email: hearts2homes@gmail.com</a>
            </li>
            <li className="mb-2">
              <a href="social_link_2" className="text-black-500 hover:underline">Phone: +254 123 4567897</a>
            </li>
            <li>
              <a href="social_link_3" className="text-black-500 hover:underline">Location: Nairobi, Kenya</a>
            </li>
          
          </ul>
        </div>
      </div>


      <div className="border rounded-lg overflow-hidden shadow-lg"> 
          <iframe
            title="Map"
            src="https://www.google.com/maps/d/u/0/viewer?mid=1SuwNJ-HqTWSF2Bmaur7HqmVqZBk&hl=en&ll=-1.2933369999999977%2C36.80705299999999&z=17"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
    </div>
  </div>
  );
}

export default Contact