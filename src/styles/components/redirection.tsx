import { ReactNode } from "react";

interface iBaseRedirectionProps {
  className?: string;
  tag?: string;
  children?: ReactNode;
  type?: string;
  disabled?: boolean;
}

export const BaseRedirection = ({
  children,
  className,
  tag,
}: iBaseRedirectionProps) => {
  return (
    <>
      {!tag && <button className={className}>{children}</button>}
      {tag === "button" && <button className={className}>{children}</button>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};
