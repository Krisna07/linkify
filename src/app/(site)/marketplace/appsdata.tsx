import { BiLogoAdobe, BiLogoVenmo, BiLogoZoom } from "react-icons/bi";
import {
  FaYoutube,
  FaTiktok,
  FaRedditAlien,
  FaFacebookF,
  FaAmazon,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaPinterestP,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaPaypal,
  FaShopify,
  FaEtsy,
  FaSpotify,
  FaGoogleDrive,
  FaTrello,
  FaEvernote,
  FaSlack,
  FaDropbox,
  FaTeamspeak,
  FaGithub,
  FaTwitch,
  FaApple,
  FaYoutubeSquare,
  FaTumblr,
  FaGoogleWallet,
  FaApplePay,
  FaAlipay,
  FaStripe,
  FaSquare,
} from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { RiNetflixFill, RiNotionFill } from "react-icons/ri"; // Use 'RiNetflixFill' from 'react-icons/ri' for Netflix logo
interface App {
  name: string;
  des: string;
  logo: JSX.Element; // Assuming JSX.Element is the type for React components
  accent: string;
  type: string;
}
const Apps: App[] = [
  {
    name: "Google Drive",
    des: "Store and share files in the cloud",
    logo: <FaGoogleDrive color="blue" />,
    accent: "blue-400",
    type: "productive",
  },
  {
    name: "Notion",
    des: "All-in-one workspace",
    logo: <RiNotionFill color="black" />,
    accent: "white",
    type: "productive",
  },
  {
    name: "Trello",
    des: "Organize tasks and projects",
    logo: <FaTrello color="blue" />,
    accent: "blue-400",
    type: "productive",
  },
  {
    name: "Evernote",
    des: "Take notes and save ideas",
    logo: <FaEvernote color="green" />,
    accent: "green-200",
    type: "productive",
  },
  {
    name: "Slack",
    des: "Communicate and collaborate with your team",
    logo: <FaSlack color="white" />,
    accent: "purple-500",
    type: "productive",
  },

  {
    name: "Todoist",
    des: "To-do list and task manager",
    logo: <FcTodoList color="red" />,
    accent: "red-500",
    type: "productive",
  },
  {
    name: "Dropbox",
    des: "Store and share your files online",
    logo: <FaDropbox color="blue" />,
    accent: "blue-400",
    type: "productive",
  },
  {
    name: "Microsoft Teams",
    des: "Chat, meet, and collaborate with your team",
    logo: <FaTeamspeak color="green" />,
    accent: "green-500",
    type: "productive",
  },
  {
    name: "GitHub",
    des: "Host and review code, manage projects and software",
    logo: <FaGithub color="black" />,
    accent: "black",
    type: "productive",
  },
  // Add more productive apps here...

  // Entertainment Apps
  {
    name: "Netflix",
    des: "Watch movies and shows online",
    logo: <RiNetflixFill color="red" />,
    accent: "red-700",
    type: "entertainment",
  },
  {
    name: "Spotify",
    des: "Listen to music and podcasts",
    logo: <FaSpotify color="green" />,
    accent: "green-500",
    type: "entertainment",
  },
  {
    name: "YouTube",
    des: "Watch and share videos",
    logo: <FaYoutube color="red" />,
    accent: "white-500",
    type: "entertainment",
  },
  {
    name: "Twitch",
    des: "Watch and stream live games",
    logo: <FaTwitch color="purple" />,
    accent: "purple-500",
    type: "entertainment",
  },

  {
    name: "Apple TV+",
    des: "Original shows, movies, and more",
    logo: <FaApple color="white" />,
    accent: "black",
    type: "entertainment",
  },
  {
    name: "Prime Video",
    des: "Stream thousands of popular movies and TV shows",
    logo: <FaAmazon color="white" />,
    accent: "blue-500",
    type: "entertainment",
  },
  {
    name: "YouTube Music",
    des: "Listen to music without ads",
    logo: <FaYoutubeSquare color="red" />,
    accent: "red-500",
    type: "entertainment",
  },

  // Add more entertainment apps here...

  // Social Media Apps
  {
    name: "Facebook",
    des: "Connect with friends and family",
    logo: <FaFacebookF color="white" />,
    accent: "blue-400",
    type: "social media",
  },
  {
    name: "Instagram",
    des: "Share photos and videos",
    logo: <FaInstagram color="white" />,
    accent: "purple-500",
    type: "social media",
  },
  {
    name: "Twitter",
    des: "Discover what's happening",
    logo: <FaXTwitter color="white" />,
    accent: "black",
    type: "social media",
  },
  {
    name: "Pinterest",
    des: "Discover and save ideas",
    logo: <FaPinterestP color="white" />,
    accent: "red-600",
    type: "social media",
  },
  {
    name: "Snapchat",
    des: "Send and receive fun snaps",
    logo: <FaSnapchatGhost color="white" />,
    accent: "yellow-300",
    type: "social media",
  },
  {
    name: "Reddit",
    des: "Join the online community",
    logo: <FaRedditAlien color="white" />,
    accent: "orange-600",
    type: "social media",
  },
  {
    name: "LinkedIn",
    des: "Build your professional network",
    logo: <FaLinkedinIn color="white" />,
    accent: "sky-600",
    type: "social media",
  },
  {
    name: "Tumblr",
    des: "Express yourself, discover, and connect",
    logo: <FaTumblr color="white" />,
    accent: "blue-400",
    type: "social media",
  },
  {
    name: "TikTok",
    des: "Create and discover short videos",
    logo: <FaTiktok color="white" />,
    accent: "slate-900",
    type: "social media",
  },
  {
    name: "WhatsApp",
    des: "Message and call securely",
    logo: <FaWhatsapp color="black" />,
    accent: "white",
    type: "social media",
  },
  // Add more finance apps here...

  // Shopping Apps
  {
    name: "Amazon",
    des: "Shop online for anything",
    logo: <FaAmazon color="black" />,
    accent: "white",
    type: "shopping",
  },
  {
    name: "Etsy",
    des: "Buy and sell unique goods",
    logo: <FaEtsy color="black" />,
    accent: "white",
    type: "shopping",
  },
  {
    name: "Shopify",
    des: "Build your online store",
    logo: <FaShopify color="white" />,
    accent: "green-500",
    type: "shopping",
  },
  {
    name: "PayPal",
    des: "Send and receive money online",
    logo: <FaPaypal color="white" />,
    accent: "blue-400",
    type: "finance",
  },
  {
    name: "Venmo",
    des: "Send and receive money with friends",
    logo: <BiLogoVenmo color="blue" />,
    accent: "blue-400",
    type: "finance",
  },
  {
    name: "Alipay",
    des: "Digital wallet and online payment platform",
    logo: <FaAlipay color="blue" />,
    accent: "blue-400",
    type: "finance",
  },
  {
    name: "Apple Pay",
    des: "Make secure payments in stores and apps",
    logo: <FaApplePay color="black" />,
    accent: "white",
    type: "finance",
  },
  {
    name: "Google Wallet",
    des: "Digital wallet for online and in-store payments",
    logo: <FaGoogleWallet color="blue" />,
    accent: "blue-400",
    type: "finance",
  },
  {
    name: "Stripe",
    des: "Online payment processing for internet businesses",
    logo: <FaStripe color="black" />,
    accent: "white",
    type: "finance",
  },
  {
    name: "Square",
    des: "Payment processing solutions for businesses",
    logo: <FaSquare color="black" />,
    accent: "white",
    type: "finance",
  },
  // Add more shopping apps here...
];

export default Apps;
