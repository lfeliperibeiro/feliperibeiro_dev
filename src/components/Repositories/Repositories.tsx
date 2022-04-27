import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner/Spinner';

export function Repositories() {
  type Repository = {
    full_name: string;
    description: string;
    clone_url: string;
  };

  const url = '/users/lfeliperibeiro/repos';
  const { data: repositories, isFetching } = useFetch<Repository[]>(url);

  return (
    <div
      className={
        'bg-gray500 h-56 rounded scrollbar-thin scrollbar-thumb-pink500 scrollbar-track-gray400 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
      }
    >
      <ul>
        {isFetching ? (
          <Spinner />
        ) : (
          repositories?.map((repo) => {
            return (
              <li
                key={repo.full_name}
                className={'mb-5 p-4 border-solid border-b-2 border-gray400'}
              >
                <a href={repo.clone_url} target={'_blank'} rel="noreferrer">
                  <h1 className={'text-pink500 font-bold hover:text-pink700'}>
                    {repo.full_name}
                  </h1>
                  <p className={'text-white'}>{repo.description}</p>
                </a>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
