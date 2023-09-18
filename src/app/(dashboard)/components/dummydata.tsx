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

export default socialMediaData;
