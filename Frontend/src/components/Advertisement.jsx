import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdSlideshow = ({ ads, settings }) => {
  return (
    <Slider {...settings}>
      {ads.map((ad) => (
        <div key={ad.id}>
          <img src={ad.image} alt={ad.alt} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
};

const Advertisement = () => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const adData = {
    ads1: [
      { id: 1, image: "https://www.wpexplorer.com/wp-content/uploads/wordpress-hotel-website-room-booking-engine.jpg", alt: "Ad 1" },
      { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFoo8y4kLV98oUwTZTAQCzqmlJUqOR0NLFg&s.jpg", alt: "Ad 2" },
      { id: 3, image: "https://motopress.com/wp-content/uploads/2020/07/hb-land-img-3.jpg", alt: "Ad 3" },
    ],
    ads2: [
      { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4mB8w6Toi7q9IeaTlm7aS3INyRiwvbxv7g&s.jpg", alt: "Ad 4" },
      { id: 5, image: "https://advinhealthcare.com/wp-content/uploads/2022/12/Types-of-Hospitals-2.jpg", alt: "Ad 5" },
      { id: 6, image: "https://cdn.apollohospitals.com/apollohospitals/apollo-prohealth/ah/explore-mobile.jpg", alt: "Ad 6" },
    ],
    ads3: [
      { id: 7, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hostel_Dormitory.jpg/640px-Hostel_Dormitory.jpg", alt: "Ad 7" },
      { id: 8, image: "https://www.hostelworld.com/blog/wp-content/uploads/2020/10/canbe_hostels_2020-07-27_blog.jpg", alt: "Ad 8" },
      { id: 9, image: "https://www.holidify.com/images/cmsuploads/compressed/323221867_20231109155008.jpg", alt: "Ad 9" },
    ],
  };

  return (
    <>
      <div>
        {/* Header Section */}
        <header className="bg-orange-200 text-orange-900 py-[80px] shadow-lg w-full">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-extrabold mb-4">
              Advertise Your Business with LocalDial
            </h1>
            <p className="text-lg mb-8">
              Connect with local customers and grow your business with targeted,
              affordable advertising solutions.
            </p>
          </div>
        </header>

        {/* Why Advertise with Us Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose LocalDial for Your Advertising?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <AdSlideshow ads={adData.ads1} settings={defaultSettings} />
                <h3 className="text-xl font-semibold text-orange-700 mb-4">
                  Wide Reach
                </h3>
                <p className="text-gray-700">
                  Your business will be visible to thousands of potential
                  customers looking for services in your local area.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <AdSlideshow ads={adData.ads2} settings={defaultSettings} />
                <h3 className="text-xl font-semibold text-orange-700 mb-4">
                  Affordable Plans
                </h3>
                <p className="text-gray-700">
                  We offer flexible and budget-friendly advertising packages for
                  businesses of all sizes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <AdSlideshow ads={adData.ads3} settings={defaultSettings} />
                <h3 className="text-xl font-semibold text-orange-700 mb-4">
                  Targeted Advertising
                </h3>
                <p className="text-gray-700">
                  Reach the right audience with our precise targeting options,
                  ensuring your ad reaches potential customers interested in
                  your services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-orange-200 py-8 text-center">
          <p className="text-orange-900">
            © 2025 LocalDial. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Advertisement;
