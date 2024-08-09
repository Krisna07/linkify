export interface userProps {
  username: string;
  email: string;
  name?: string;
  image: string;
  id: string;
}

export interface boardProps {
  id?: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}
