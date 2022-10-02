import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Social() {
  return (
    <div className={'flex items-center  gap-16 my-10 text-3xl'}>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://github.com/lfeliperibeiro'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaGithub  size={20}/>
      </a>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://www.linkedin.com/in/lfeliperibeiro/'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaLinkedin size={20}/>
      </a>
      <a
        className={'text-purple100 hover:text-pink500'}
        href={'https://twitter.com/Lfelipe_rib'}
        target={'_blank'}
        rel="noreferrer"
      >
        <FaTwitter size={20}/>
      </a>
    </div>
  );
}
