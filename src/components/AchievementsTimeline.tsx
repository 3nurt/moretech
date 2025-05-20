import React from "react";
import TimelineItem from "./TimelineItem";
import { Trophy, Award, FileText, Star, Users } from "lucide-react";

const AchievementsTimeline: React.FC = () => {
  const achievements = [
    {
      year: "2025",
      title: "Bangladesh Investment Summit 2025",
      description:
        "RoboAid (More Tech Bangladesh) has been selected among the top 30 startups from all over Bangladesh to pitch at the Bangladesh Investment Summit 2025 — where we had the opportunity to present our startup directly to Nobel Laureate Dr. Muhammad Yunus, alongside 600+ investors from over 50+ countries.",
      icon: <Trophy className="h-6 w-6" />,
      imagePath:
        "https://cdn.hack.ngo/slackcdn/a851ef9407d18b1dd4ef52a5d945baed.jpg",
    },
    {
      year: "2023",
      title: "Bangabandhu Innovation Grant Winner",
      description:
        "Secured 10 lakh BDT national grant from the iDEA Project of ICT Division for building Bangladesh's first smart robotic wheelchair.",
      icon: <Award className="h-6 w-6" />,
      imagePath:
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/ae6a702855efbb3074cd04117a8a7f325cbda9c7_1688271302214.jpeg",
    },
    {
      year: "2024",
      title: "Youth Co:Lab Springboard 7.0 Selection",
      description:
        "Selected among top social innovators in South Asia by UNDP and Citi Foundation for impact-driven assistive technology solutions.",
      icon: <Star className="h-6 w-6" />,
      imagePath:
        "https://www.tbsnews.net/sites/default/files/styles/very_big_1/public/images/2025/03/24/img-20250324-wa0018.jpg",
    },
    {
      year: "2025",
      title: "1500+ Lives Impacted Across Bangladesh",
      description:
        "Empowering people with disabilities through smart wheelchairs, robotic aids, and community-driven awareness programs.",
      icon: <Users className="h-6 w-6" />,
      imagePath:
        "https://cdn.hack.ngo/slackcdn/4700f111afd9db6c10f11805015336d8.jpg",
    },
    {
      year: "2025",
      title: "National & International Robotics Champion",
      description:
        "Recognized 4x as national champion, 2x runner-up, and 1x international robotics winner for leadership in educational robotics innovation.",
      icon: <FileText className="h-6 w-6" />,
      imagePath:
        "https://cdn.hack.ngo/slackcdn/14f3efe73e573be9c3cbfb984f0f2481.jpg",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Our Achievements Journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and recognition in our mission to
            revolutionize mobility solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <TimelineItem
                key={index}
                year={achievement.year}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                imagePath={achievement.imagePath}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl">
            <div className="bg-white dark:bg-gray-800 rounded-lg px-8 py-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Join Our Journey of Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                We're constantly pushing the boundaries of what's possible in
                assistive technology. Stay tuned for more groundbreaking
                developments in our mission to enhance mobility.
              </p>
              <a
                href="#vision"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                See Our Vision
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
