const Container = ({
  isClickable,
  onClick,
  className,
  children,
}: {
  isClickable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
}): JSX.Element => {
  const clickableStyles = 'cursor-pointer';

  return (
    <div
      className={`px-4 py-2 border border-gray-400 rounded-xl ${
        isClickable ? clickableStyles : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Container;
