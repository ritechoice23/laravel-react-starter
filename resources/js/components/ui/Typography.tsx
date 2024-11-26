import React, { PropsWithChildren } from 'react';

export const H1: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`} {...props}>
        {children}
    </h1>
);

export const H2: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <h2
        className={`mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}
        {...props}
    >
        {children}
    </h2>
);

export const H3: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <h3 className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} {...props}>
        {children}
    </h3>
);

export const P: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`} {...props}>
        {children}
    </p>
);

export const Blockquote: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`} {...props}>
        {children}
    </blockquote>
);

export const Li: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <li className={`mt-2 ${className}`} {...props}>
        {children}
    </li>
);

export const Table: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <div className={`my-6 w-full overflow-y-auto ${className}`} {...props}>
        <table className="w-full">{children}</table>
    </div>
);

export const TableHeader: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <thead>
        <tr className={`m-0 border-t p-0 even:bg-muted ${className}`} {...props}>
            {children}
        </tr>
    </thead>
);

export const TableRow: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <tr className={`m-0 border-t p-0 even:bg-muted ${className}`} {...props}>
        {children}
    </tr>
);

export const TableCell: React.FC<PropsWithChildren<{
    className?: string;
}>> = ({ children, className, ...props }) => (
    <td className={`border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ${className}`} {...props}>
        {children}
    </td>
);
