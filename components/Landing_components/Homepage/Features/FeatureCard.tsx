interface FeatureCardProps {
  heading: string;
  subheading: string;
  description: string;
  children: React.ReactNode;
}

const FeatureCard = ({
  heading,
  subheading,
  description,
  children,
}: FeatureCardProps) => {
  return (
    <div className="max-w-[400px] h-full grid place-items-start p-4 px-8 bg-white text-dark rounded-lg gap-16">
      <div className="grid gap-2 leading-[120%]">
        <span className="text-[gray] font-bold">{heading}</span>
        <h2 className="font-[600]">{subheading}</h2>
      </div>
      {children}
      <p className="text-sm text-dark/75 mt-8 font-[500] text-justify">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
