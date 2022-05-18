import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Social() {
  return (
    <div className={'flex items-center  gap-4 my-10 text-3xl'}>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://github.com/lfeliperibeiro'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://www.linkedin.com/in/lfeliperibeiro/'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://twitter.com/Lfelipe_rib'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
}