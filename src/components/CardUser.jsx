/* eslint-disable react/prop-types */
import { Github, FolderGit2 } from "lucide-react";
// import PropTypes from "prop-types";

const CardUser = ({ dataUser, repoUser }) => {
  return (
    <div className={dataUser?.name ? "block" : "hidden"}>
      <div className='mockup-browser border border-base-300 bg-[#1B1F23] rounded-lg md:w-[700px] w-80 bg-browser-img bg-no-repeat bg-cover bg-opacity-75 md:bg-right-top bg-center bg-blend-color-burn drop-shadow-2xl my-10'>
        <div className='mockup-browser-toolbar'>
          <a className='input border border-base-300' href={dataUser?.html_url}>
            https://github.com/{dataUser?.login}
          </a>
        </div>
        <div className='flex justify-center items-center flex-col px-8 py-16 border-t border-base-300 gap-2'>
          <div className='card w-full shadow-xl image-full drop-shadow-2xl'>
            <div className='card-body'>
              <div className='avatar justify-center '>
                <div className='w-36 rounded-full ring ring-primary ring-offset-white/80 ring-offset-4 bg-primary'>
                  <img src={dataUser?.avatar_url} alt='profile' />
                </div>
              </div>
              <div className='text-center text-white/90'>
                <h1 className='text-2xl'>{dataUser?.name}</h1>
                <h2 className='my-2'>{dataUser?.bio}</h2>
                <div className='flex justify-center gap-4'>
                  <div>
                    <h2 className='text-2xl'>{dataUser?.followers}</h2>
                    <h2>Followers</h2>
                  </div>
                  <div>
                    <h2 className='text-2xl'>{dataUser?.following}</h2>
                    <h2>Following</h2>
                  </div>
                </div>
              </div>
              <h2 className='card-title text-white/90 mt-7 mb-2'>
                <FolderGit2 /> My Repository
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3'>
                {repoUser?.length === 0 ? (
                  <div>No Repo</div>
                ) : (
                  dataUser &&
                  repoUser?.map((repo) => (
                    <a
                      key={repo.id}
                      className='btn hover:text-white hover:scale-105'
                      href={repo.html_url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {repo.name}
                    </a>
                  ))
                )}
              </div>
              <div className='card-actions justify-end mt-12'>
                <a
                  className='btn btn-primary hover:text-white hover:scale-105'
                  href={dataUser?.html_url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Github />
                  Visit My Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CardUser.propTypes = {
//   dataUser: PropTypes.any,
//   repoUser: PropTypes.array,
// };

export default CardUser;
