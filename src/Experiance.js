import React from 'react';
import { Chrono } from 'react-chrono';
import './Experiance.css'; // Import the external CSS file

const data = [
  {
    title: "Computer Society of India- VIT Chapter",
    cardTitle: "General Secretary",
    //cardDetailedText: "• Orchestrated and led a dynamic team of 27 in organizing 10+ events, drawing an impressive total of over 8000 participants. • Headed the organizing committee of DevSpace, one of India's largest international-level hackathons, further establishing the chapter's prominence in the tech community.",
    cardDetailedText: "October 2020 - July 2023"
  },
  {
    title: "VeUp Technologies",
    cardTitle: "Full Stack Developer Intern",
    //cardDetailedText: "• Optimized service sending scripts by executing a robust database caching mechanism, resulting in a 31% reduction in data retrieval time, and improved overall efficiency. • Designed and delivered multiple full-stack applications and REST-APIs for diverse clients, leveraging AWS services such as Lambda, S3, and EC2, to ensure seamless and scalable deployment for enhanced user experiences.",
    cardDetailedText: "Jan 2022 - June 2023"
  },
  {
    title: "NetSepio",
    cardTitle: "\n\nOpen SourceContributor",
    //cardDetailedText: "• Collaborated with a team of 3 to create a sophisticated Discord utility bot. Delivered a solution for detecting phishing links on main server using GraphQL, golang and Kubernetes, ensuring consistent performance and scalability of the utility bot.",
    cardDetailedText: "September 2022 - October 2022"
  },
  {
    title: "Dice Enterprises",
    cardTitle: "Backend Developer Intern",
    //cardDetailedText: "• Prototyped and created live production API’s to enhance search functionality on the platform, leading to a substantial 22% reduction in user search time through optimized data structures. • Streamlined the platform by porting code to vert.X, introducing boosted concurrency, and ensuring a more responsive user experience.",
    cardDetailedText: "October 2022 - April 2023"
  }
  ,

];

const Experiance = () => {
  return (
    <div className="experience-section">
      <section id="experiance" />
      <Chrono
        items={data}
        cardHeight={78}

        mode="VERTICAL"
        fontSizes={{
          cardText: '12em',
          cardDetailedText: '100em',
          cardTitle: '1.5em',
          title: '1.2em',
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
                <h3 style={{ whiteSpace: 'pre-line' }}>{item.cardTitle}</h3>
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
