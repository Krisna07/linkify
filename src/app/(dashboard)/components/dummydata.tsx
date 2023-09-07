import { AnySrvRecord } from "dns";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialMediaData = [
  {
    name: "Twitter",
    link: "https://twitter.com/bigboy-21",
    date: "2023-08-14",
    icon: <FaTwitter color="#1DA1F2" />,
    followers: 5000,
    posts: [
      {
        id: 1,
        name: "Coding Achievement",
        content: "Just cracked a challenging coding problem. 💻 #CodeLife",
        likes: 50,
        retweets: 20,
      },
      {
        id: 2,
        name: "Tech Conference Excitement",
        content: "Excited about the upcoming tech conference! #TechSummit",
        likes: 30,
        retweets: 10,
      },
      // ...more posts
    ],
    bio: "Sharing thoughts and ideas in 280 characters or less.",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/lostland",
    date: "2023-08-14",
    icon: <FaInstagram color="#C13584" />,
    followers: 10000,
    posts: [
      {
        id: 1,
        name: "Sunset by the Beach",
        image: "https://example.com/image1.jpg",
        caption: "Sunset vibes by the beach. 🌅 #BeachLife",
        likes: 200,
        comments: 30,
      },
      {
        id: 2,
        name: "Mountain Adventures",
        image: "https://example.com/image2.jpg",
        caption: "Exploring the mountains. 🏞️ #MountainAdventures",
        likes: 180,
        comments: 25,
      },
      // ...more posts
    ],
    bio: "Capturing the beauty of life, one photo at a time.",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/adam_bolt",
    date: "2023-08-14",
    icon: <FaFacebook color="#1877F2" />,
    friends: 1500,
    posts: [
      {
        id: 1,
        name: "Weekend Adventure",
        content:
          "Enjoying a weekend hike in the beautiful Bay Area! #NatureLovers",
        likes: 50,
        comments: 10,
        shares: 5,
      },
      {
        id: 2,
        name: "Exciting Conference",
        content:
          "Excited to attend the upcoming marketing conference! #MarketingWorld",
        likes: 70,
        comments: 15,
        shares: 3,
      },
      // ...more posts
    ],
    bio: "Connecting with friends and sharing memories.",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/adam.bolt",
    date: "2023-08-14",
    icon: <FaLinkedin color="#0A66C2" />,
    connections: 500,
    jobTitle: "Software Developer at TechCo",
    posts: [
      {
        id: 1,
        name: "Tech Talk Insights",
        content:
          "Attended an insightful tech talk on AI and machine learning today. #TechTalks",
        likes: 20,
        comments: 5,
      },
      {
        id: 2,
        name: "Sharing Professional Insights",
        content:
          "Sharing my latest article on effective marketing strategies. #MarketingInsights",
        likes: 30,
        comments: 8,
      },
    ],
    bio: "Building a professional network and exploring opportunities.",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/codecamp",
    date: "2023-08-14",
    icon: <FaYoutube color="#FF0000" />,
    subscribers: 20000,
    posts: [
      {
        id: 1,
        name: "Mastering Loops in JavaScript",
        videoThumbnail: "https://example.com/video1-thumbnail.jpg",
        views: 10000,
        likes: 500,
        comments: 50,
      },
      {
        id: 2,
        name: "Introduction to Machine Learning",
        videoThumbnail: "https://example.com/video2-thumbnail.jpg",
        views: 15000,
        likes: 700,
        comments: 60,
      },
      // ...more posts
    ],
    bio: "Teaching coding and tech topics through engaging videos.",
  },
  // ...other social media platforms
];

// Function to generate dummy activity data for different time periods
// const generateDummyActivityData = (originalData: any, days: any) => {
//   const newData = [...originalData];

//   // Simulate activity for each platform
//   newData.forEach((profile) => {
//     profile.posts.forEach((post: any) => {
//       // Generate random activity data for each post
//       post.activity = {
//         likes: Math.floor(Math.random() * 10) * (days / 30), // Approximate increase or decrease per day
//         comments: Math.floor(Math.random() * 5) * (days / 30), // Approximate increase or decrease per day
//         shares: Math.floor(Math.random() * 3) * (days / 30), // Approximate increase or decrease per day
//       };
//     });
//   });

//   return newData;
// };

// // Generate dummy activity data for 3 days, 7 days, and 1 month
// const activityDataFor3Days = generateDummyActivityData(socialMediaData, 3);
// const activityDataFor7Days = generateDummyActivityData(socialMediaData, 7);
// const activityDataFor1Month = generateDummyActivityData(socialMediaData, 30);

// // Add the dummy activity data as a new attribute within the existing data
// socialMediaData.forEach((profile, index) => {
//   profile.posts.forEach((post: any, postIndex) => {
//     post.activityData = {
//       days3: activityDataFor3Days[index].posts[postIndex].activity,
//       days7: activityDataFor7Days[index].posts[postIndex].activity,
//       month1: activityDataFor1Month[index].posts[postIndex].activity,
//     };
//   });
// });

// Now, each post within the existing data has an "activityData" attribute with activity data for 3 days, 7 days, and 1 month.

export default socialMediaData;
