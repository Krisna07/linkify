import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug[0];
  slug && console.log(slug);
  const fetchProject = async () => {};
  return <div>page</div>;
};

export default page;
