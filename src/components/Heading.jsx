import { GithubIcon } from "lucide-react";

const Heading = () => {
  return (
    <div className='text-center mt-40 mb-20'>
      <h1 className='text-white md:text-4xl text-2xl font-bold'>
        A Simple Github User Search
      </h1>
      <h2 className='text-xl inline-flex items-center mt-2'>
        Using GitHub API <GithubIcon className='ml-2 text-white' />
      </h2>
    </div>
  );
};

export default Heading;
