import Header from '@/components/Header';
import React from 'react'

const Technologies = () => {
    const techList = [
        {
            name: "Front End Development",
            excerpt:
              "Our talented engineers craft interactive designs in prototypes that guarantee a user-friendly experience.",
            icon: "https://devflovv.com/wp-content/uploads/2023/09/Front-End-Icon.png",
            tools: [
              'https://devflovv.com/wp-content/uploads/svg/react-js.svg',
              'https://devflovv.com/wp-content/uploads/svg/angular-icon-1.svg',
              'https://devflovv.com/wp-content/uploads/svg/vue-js-1.svg',
              // Add more image URLs here if needed
            ]
          },
        {
          name: "Back End Development",
          excerpt:
            "Our tech-savvy developers are MEAN, MEVN and MERN stack experts delivering fully customized results.",
          icon: ("https://devflovv.com/wp-content/uploads/2023/09/Tech-1-Icon.png"),
          tools: [
            'https://devflovv.com/wp-content/uploads/svg/nodejs-icon.svg',
            'https://devflovv.com/wp-content/uploads/svg/dotnet.svg',
            'https://devflovv.com/wp-content/uploads/svg/java-4.svg',
            'https://devflovv.com/wp-content/uploads/svg/laravel-2.svg',
            'https://devflovv.com/wp-content/uploads/svg/python-5.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "UI/UX Design",
          excerpt:
            "Our masterful and creative UI/UX designers create user-centric platforms that navigate smoothly. ",
          icon: ("https://devflovv.com/wp-content/uploads/2023/09/Lightbulb-Icon.png"),
          tools: [
            'https://devflovv.com/wp-content/uploads/svg/Illustrator.svg',
            'https://devflovv.com/wp-content/uploads/svg/Figma.svg',
            'https://devflovv.com/wp-content/uploads/svg/Invision.svg',
            'https://devflovv.com/wp-content/uploads/svg/Photoshop.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "Cloud/Dev Ops",
          excerpt:
            "We know how to strike the perfect balance in operations and development to accelerate your product cycles.",
          icon: ("https://devflovv.com/wp-content/uploads/2023/09/Cloud-Icon.png"),
          tools: [
            'https://devflovv.com/wp-content/uploads/svg/aws-logo.svg',
            'https://devflovv.com/wp-content/uploads/svg/google-cloud-1.svg',
            'https://devflovv.com/wp-content/uploads/svg/microsoft-azure-3.svg',
            'https://devflovv.com/wp-content/uploads/svg/docker.svg',
            'https://devflovv.com/wp-content/uploads/svg/kubernets.svg',
            // Add more image URLs here if needed
          ]
        },
        {
          name: "Database",
          excerpt:
            "Our database programmers and developers contribute to high-quality data through their expertise in data governance.",
          icon: ("https://devflovv.com/wp-content/uploads/2023/09/Database-Icon.png"),
          tools: [
            'https://devflovv.com/wp-content/uploads/svg/MongoDB.svg',
            'https://devflovv.com/wp-content/uploads/svg/sql-database-generic.svg',
            'https://devflovv.com/wp-content/uploads/svg/neo4j.svg',
            // Add more image URLs here if needed
          ]
        },
    
        {
          name: "Others",
          excerpt:
            "We also excel in many other multiple platforms like React Native, Ionic, Arduino, iOS, etc.",
          icon: ("https://devflovv.com/wp-content/uploads/2023/09/Tech-5-Icon.png"),
          tools: [
            'https://devflovv.com/wp-content/uploads/svg/react-native-1.svg',
            'https://devflovv.com/wp-content/uploads/svg/ionic-icon-svgrepo-com.svg',
            'https://devflovv.com/wp-content/uploads/svg/arduino-1.svg',
            'https://devflovv.com/wp-content/uploads/svg/ios-2.svg',

            // Add more image URLs here if needed
          ]
        },
        
      ];
  return (
    <>
      {/* <Header pageTitle={`Our Technology Stack`} /> */}
      <div className="container mx-auto">
        <img src="/s2.png" width={100} alt="" />
        <h1 className="text-center text-5xl font-bold py-8">Our Technology Stack</h1>
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
