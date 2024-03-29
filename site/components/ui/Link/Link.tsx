import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const Link: React.FC<
  NextLinkProps & {
    children?: React.ReactNode
  }
> = ({ href, children, ...props }) => (
  <NextLink href={href} {...props}>
    {children}
  </NextLink>
);

export default Link;
