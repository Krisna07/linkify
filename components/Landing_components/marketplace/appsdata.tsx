import { BiLogoVenmo } from "react-icons/bi";
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
import { FaXTwitter } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { RiNetflixFill, RiNotionFill } from "react-icons/ri";

interface App {
  name: string;
  des: string;
  logo: JSX.Element;
  accent: string;
  type: string;
}

const Apps: App[] = [
  // Productive Apps
  {
    name: "Google Drive",
    des: "Store and share files in the cloud",
    logo: <FaGoogleDrive color="white" />,
    accent: "#4285F4",
    type: "productive",
  },
  {
    name: "Notion",
    des: "All-in-one workspace",
    logo: <RiNotionFill color="white" />,
    accent: "#000000",
    type: "productive",
  },
  {
    name: "Trello",
    des: "Organize tasks and projects",
    logo: <FaTrello color="white" />,
    accent: "#0079BF",
    type: "productive",
  },
  {
    name: "Evernote",
    des: "Take notes and save ideas",
    logo: <FaEvernote color="white" />,
    accent: "#00A82D",
    type: "productive",
  },
  {
    name: "Slack",
    des: "Communicate and collaborate with your team",
    logo: <FaSlack color="white" />,
    accent: "#4A154B",
    type: "productive",
  },
  {
    name: "Todoist",
    des: "To-do list and task manager",
    logo: <FcTodoList />,
    accent: "#E44332",
    type: "productive",
  },
  {
    name: "Dropbox",
    des: "Store and share your files online",
    logo: <FaDropbox color="white" />,
    accent: "#0061FF",
    type: "productive",
  },
  {
    name: "Microsoft Teams",
    des: "Chat, meet, and collaborate with your team",
    logo: <FaTeamspeak color="white" />,
    accent: "#6264A7",
    type: "productive",
  },
  {
    name: "GitHub",
    des: "Host and review code, manage projects and software",
    logo: <FaGithub color="white" />,
    accent: "#181717",
    type: "productive",
  },

  // Entertainment Apps
  {
    name: "Netflix",
    des: "Watch movies and shows online",
    logo: <RiNetflixFill color="white" />,
    accent: "#E50914",
    type: "entertainment",
  },
  {
    name: "Spotify",
    des: "Listen to music and podcasts",
    logo: <FaSpotify color="white" />,
    accent: "#1DB954",
    type: "entertainment",
  },
  {
    name: "YouTube",
    des: "Watch and share videos",
    logo: <FaYoutube color="white" />,
    accent: "#FF0000",
    type: "entertainment",
  },
  {
    name: "Discord",
    des: "Chat and voice communication for gamers",
    logo: <FaDiscord color="white" />,
    accent: "#7289DA",
    type: "entertainment",
  },
  {
    name: "Twitch",
    des: "Watch and stream live games",
    logo: <FaTwitch color="white" />,
    accent: "#9146FF",
    type: "entertainment",
  },
  {
    name: "Apple TV+",
    des: "Original shows, movies, and more",
    logo: <FaApple color="white" />,
    accent: "#000000",
    type: "entertainment",
  },
  {
    name: "Prime Video",
    des: "Stream thousands of popular movies and TV shows",
    logo: <FaAmazon color="white" />,
    accent: "#00A8E1",
    type: "entertainment",
  },
  {
    name: "YouTube Music",
    des: "Listen to music without ads",
    logo: <FaYoutubeSquare color="white" />,
    accent: "#FF0000",
    type: "entertainment",
  },

  // Social Media Apps
  {
    name: "Facebook",
    des: "Connect with friends and family",
    logo: <FaFacebookF color="white" />,
    accent: "#1877F2",
    type: "social media",
  },
  {
    name: "Instagram",
    des: "Share photos and videos",
    logo: <FaInstagram color="white" />,
    accent: "#E4405F",
    type: "social media",
  },
  {
    name: "Twitter",
    des: "Discover what's happening",
    logo: <FaXTwitter color="white" />,
    accent: "#1DA1F2",
    type: "social media",
  },
  {
    name: "Pinterest",
    des: "Discover and save ideas",
    logo: <FaPinterestP color="white" />,
    accent: "#E60023",
    type: "social media",
  },
  {
    name: "Snapchat",
    des: "Send and receive fun snaps",
    logo: <FaSnapchatGhost color="white" />,
    accent: "#FFFC00",
    type: "social media",
  },
  {
    name: "Reddit",
    des: "Join the online community",
    logo: <FaRedditAlien color="white" />,
    accent: "#FF4500",
    type: "social media",
  },
  {
    name: "LinkedIn",
    des: "Build your professional network",
    logo: <FaLinkedinIn color="white" />,
    accent: "#0077B5",
    type: "social media",
  },
  {
    name: "Tumblr",
    des: "Express yourself, discover, and connect",
    logo: <FaTumblr color="white" />,
    accent: "#36465D",
    type: "social media",
  },
  {
    name: "TikTok",
    des: "Create and discover short videos",
    logo: <FaTiktok color="white" />,
    accent: "#69C9D0",
    type: "social media",
  },
  {
    name: "WhatsApp",
    des: "Message and call securely",
    logo: <FaWhatsapp color="white" />,
    accent: "#25D366",
    type: "social media",
  },

  // Finance Apps
  {
    name: "PayPal",
    des: "Send and receive money online",
    logo: <FaPaypal color="white" />,
    accent: "#003087",
    type: "finance",
  },
  {
    name: "Venmo",
    des: "Send and receive money with friends",
    logo: <BiLogoVenmo color="white" />,
    accent: "#3D95CE",
    type: "finance",
  },
  {
    name: "Alipay",
    des: "Digital wallet and online payment platform",
    logo: <FaAlipay color="white" />,
    accent: "#00A1E9",
    type: "finance",
  },
  {
    name: "Apple Pay",
    des: "Make secure payments in stores and apps",
    logo: <FaApplePay color="white" />,
    accent: "#000000",
    type: "finance",
  },
  {
    name: "Google Wallet",
    des: "Digital wallet for online and in-store payments",
    logo: <FaGoogleWallet color="white" />,
    accent: "#4285F4",
    type: "finance",
  },
  {
    name: "Stripe",
    des: "Online payment processing for internet businesses",
    logo: <FaStripe color="white" />,
    accent: "#008CDD",
    type: "finance",
  },
];

export default Apps;
