import commands from '@/assets/commands.json';
import Link from 'next/link';
import Commando from './components/commando';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center my-16'>
      <h1 className='text-2xl font-bold'>
        Hello There! <br />
        Welcome to my list of{' '}
        <Link href='https://www.gnu.org/software/bash/' target='_blank'>
          Bash
        </Link>{' '}
        commands!
      </h1>

      <div className='mt-16'>
        <h2 className='text-xl font-bold my-5'>Commands</h2>
        <ul className='flex flex-col gap-3'>
          {commands.map((command, index) => (
            <Commando key={index} {...command} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
