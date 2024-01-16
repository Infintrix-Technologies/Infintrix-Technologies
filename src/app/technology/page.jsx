import Header from '@/components/Header';
import React from 'react'

const Technologies = () => {
    const techList = [
        {
            name: "Front End Development",
            excerpt:
              "Our talented engineers craft interactive designs in prototypes that guarantee a user-friendly experience.",
            icon: "/images/Front-End-Icon.png",
            tools: [
              '/images/react-js.svg',
              '/images/angular-icon-1.svg',
              '/images/vue-js-1.svg',
              // Add more image URLs here if needed
            ]
          },
        {
          name: "Back End Development",
          excerpt:
            "Our tech-savvy developers are MEAN, MEVN and MERN stack experts delivering fully customized results.",
          icon: ("/images/Tech-1-Icon.png"),
          tools: [
            '/images/nodejs-icon.svg',
            '/images/dotnet.svg',
            '/images/java-4.svg',
            '/images/laravel-2.svg',
            '/images/python-5.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "UI/UX Design",
          excerpt:
            "Our masterful and creative UI/UX designers create user-centric platforms that navigate smoothly. ",
          icon: ("/images/Lightbulb-Icon.png"),
          tools: [
            '/images/Illustrator.svg',
            '/images/Figma.svg',
            '/images/Invision.svg',
            '/images/Photoshop.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "Cloud/Dev Ops",
          excerpt:
            "We know how to strike the perfect balance in operations and development to accelerate your product cycles.",
          icon: ("/images/Cloud-Icon.png"),
          tools: [
            '/images/aws-logo.svg',
            '/images/google-cloud-1.svg',
            '/images/microsoft-azure-3.svg',
            '/images/docker.svg',
            '/images/kubernets.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "Database",
          excerpt:
            "Our database programmers and developers contribute to high-quality data through their expertise in data governance.",
          icon: ("/images/Database-Icon.png"),
          tools: [
            '/images/MongoDB.svg',
            '/images/sql-database-generic.svg',
            '/images/neo4j.svg',
            // Add more image URLs here if needed
          ]
        },
    
        {
          name: "Others",
          excerpt:
            "We also excel in many other multiple platforms like React Native, Ionic, Arduino, iOS, etc.",
          icon: ("/images/Tech-5-Icon.png"),
          tools: [
            '/images/react-native-1.svg',
            '/images/ionic-icon-svgrepo-com.svg',
            '/images/arduino-1.svg',
            '/images/ios-2.svg',

            // Add more image URLs here if needed
          ]
        },
        
      ];
  return (
    <>
      {/* <Header pageTitle={`Our Technology Stack`} /> */}
      <div className="container mx-auto">
        <div className='relative'>
        <img src="/s1.png" className='absolute' style={{top: "56%", left: "54%", zIndex: "-1"}} width={100} alt="" />
        <h1 className="text-center text-5xl font-bold py-8">Our Technology Stack</h1>
        </div>
        <div className="sm:flex flex-wrap gap-5">
          {techList.map((service, index) => {
            return (
              <div key={index} className="md:w-1/3 sm:w-full rounded-lg border-solid border-spacing-2 border-2 my-4">
                <div className="py-6 px-7">
                  <div className="flex justify-center mb-5">
                    <img src={service.icon} style={{ width: "60px" }} alt={`Icon ${index}`} />
                  </div>
                  <h1 className="text-center font-bold mb-4">{service.name}</h1>
                  <p className="text-center">{service.excerpt}</p>
                  <div className="flex justify-center flex-wrap my-5 gap-4">
                    {service.tools && service.tools.map((imageUrl, imageIndex) => (
                      <img key={imageIndex} src={imageUrl} alt={`Image ${imageIndex}`} style={{ width: "30px"}} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Technologies
