import React from 'react';
import { Chrono } from 'react-chrono';
import './Experiance.css'; // Import the external CSS file

const data = [
  {
    title: "Dice Enterprises",
    cardTitle: "Backend Developer Intern",
    cardDetailedText: "• Prototyped and created live production API’s to enhance search functionality on the platform, leading to a substantial 22% reduction in user search time through optimized data structures. • Streamlined the platform by porting code to vert.X, introducing boosted concurrency, and ensuring a more responsive user experience.",
  },
  {
    title: "VeUp Technologies",
    cardTitle: "Full Stack Developer Intern",
    cardDetailedText: "• Optimized service sending scripts by executing a robust database caching mechanism, resulting in a 31% reduction in data retrieval time, and improved overall efficiency. • Designed and delivered multiple full-stack applications and REST-APIs for diverse clients, leveraging AWS services such as Lambda, S3, and EC2, to ensure seamless and scalable deployment for enhanced user experiences.",
  },
  {
    title: "Computer Society of India- VIT Chapter",
    cardTitle: "General Secretary",
    cardDetailedText: "• Orchestrated and led a dynamic team of 27 in organizing 10+ events, drawing an impressive total of over 8000 participants. • Headed the organizing committee of DevSpace, one of India's largest international-level hackathons, further establishing the chapter's prominence in the tech community.",
  },
  {
    title: "NetSepio",
    cardTitle: "Open Source Contributor",
    cardDetailedText: "• Collaborated with a team of 3 to create a sophisticated Discord utility bot. Delivered a solution for detecting phishing links on main server using GraphQL, golang and Kubernetes, ensuring consistent performance and scalability of the utility bot.",
  },
];

const Experiance = () => {
  return (
    <div>
      <section id="experiance" />
      <Chrono
        items={data}
        cardHeight={150}

        mode="VERTICAL"
        fontSizes={{
          cardText: '5rem',
          cardTitle: '3rem',
          title: '2rem',
        }}
        theme={{
          primary: "blue",
          secondary: "yellow",
          cardBgColor: "beige",
          cardForeColor: "violet",
          titleColor: "white",
          titleColorActive: "red",
          cardSubtitleColor: "green",
          cardDetailsColor: "black"
        }}
        itemRenderer={({ item, index }, state) => {
          const { isRight } = state;
          return (
            <div className={`chrono-item ${isRight ? 'left' : 'right'} custom-font`}>
              <div>
                <h2>{item.title}</h2>
                <h3>{item.cardTitle}</h3>
                <p className="bold-text">{item.cardDetailedText}</p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Experiance;
