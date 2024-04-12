import { UnstyledLink } from './Button';

export default function MobileNavLink({ active = false, className = '', children, ...delegated }) {
    return (
        <UnstyledLink
            {...delegated}
            className={
                'relative block py-2 text-sm text-gray-700 ' +
                (active
                    ? "after:content[''] after:absolute after:-left-8 after:bottom-0 after:h-9 after:w-5 after:rounded-lg after:bg-primary-400"
                    : '') +
                className
            }
            role="menuitem"
        >
            {children}
        </UnstyledLink>
    );
}
