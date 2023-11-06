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
              <a href="social_link_1" className="text-blue-500 hover:underline">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="social_link_2" className="text-blue-500 hover:underline">Twitter</a>
            </li>
            <li>
              <a href="social_link_3" className="text-blue-500 hover:underline">Instagram</a>
            </li>
          
          </ul>
        </div>
      </div>


      <div className="border rounded-lg overflow-hidden shadow-lg"> 
          <iframe
            title="Map"
            src="https://maps.google.com/maps?width=1100&amp;height=600&amp;hl=en&amp;q=Garden%20City%20Nairobi+(Nairobi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5391914289966!2dYOUR-LONGITUDE!3dYOUR-LATITUDE!5e0!3m2!1sen!2sus!4vYOUR-MAP-ID"
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