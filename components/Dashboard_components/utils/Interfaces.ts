export interface userProps {
  username: string;
  email: string;
  name?: string;
  image: string;
  id: string;
  isVerified?: boolean;
  timestamp?: number;
}

export interface boardProps {
  id?: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  boardColor: string;
  tags: string[];
}

export interface VerificationProps {
  isExpired: boolean;
  isVerified: boolean;
  expiryTime: number;
}

export interface Projects {
  name: string;
  type: string;
}
