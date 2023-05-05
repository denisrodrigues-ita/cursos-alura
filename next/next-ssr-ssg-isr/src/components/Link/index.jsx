import Link from "next/link";

const LinkComponent = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref {...props}>
      {children}
    </Link>
  );
};

export default LinkComponent;
