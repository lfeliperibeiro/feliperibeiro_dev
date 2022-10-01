import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner/Spinner';
import {Card, List} from "dracula-ui";

export function Repositories() {
  type Repository = {
    full_name: string;
    description: string;
    clone_url: string;
  };

  const url = '/users/lfeliperibeiro/repos';
  const { data: repositories, isFetching } = useFetch<Repository[]>(url);

  return (
    <Card color="purple">
    <div
      className={
        'h-56 rounded scrollbar-thin scrollbar-thumb-pink500 scrollbar-track-gray400 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
      }
    >
      <List color="purpleCyan">
        {isFetching ? (
          <Spinner />
        ) : (
          repositories?.map((repo) => {
            return (
              <li
                key={repo.full_name}
                className={'mb-5 p-4 border-solid border-b-2 border-gray400 drac-text drac-text-white'}
              >
                <a href={repo.clone_url} target={'_blank'} rel="noreferrer">

                  <h1 className={'font-bold hover:text-pink700 drac-text drac-text-cyan'}>
                    {repo.full_name}
                  </h1>
                  <p className={'drac-text drac-text-white'}>{repo.description}</p>
                </a>
              </li>
            );
          })
        )}
      </List>
    </div>
    </Card>
  );
}
