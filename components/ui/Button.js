// components/ui/Button.js
import clsx from 'clsx';

export default function Button({ children, className, variant = 'primary', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  const buttonClasses = clsx(baseStyles, variants[variant], className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}