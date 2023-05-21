import clsx from 'clsx';
import { FC } from 'react';

interface CommandoProps {
  command: string;
  description: string;
}

const Commando: FC<CommandoProps> = ({ command, description }) => {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        'flex flex-col',
        'bg-teal-400 dark:bg-teal-600',
        'rounded-lg p-5'
      )}
    >
      <h3
        className='text-red-800 dark:text-red-200 mb-5'
        dangerouslySetInnerHTML={{
          __html: command.replaceAll('\n', '<br />'),
        }}
      />
      <summary className='ml-5'>
        <b>Description:</b> {description}
      </summary>
    </div>
  );
};

export default Commando;
