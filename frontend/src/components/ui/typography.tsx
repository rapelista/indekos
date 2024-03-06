import { cn } from "@/lib/utils";

interface TypographyProps {
    className?: string;
    children?: React.ReactNode;
}

export const H1 = ({ className, children }: TypographyProps) => (
    <h1
        className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
        )}
    >
        {children}
    </h1>
);

export const H2 = ({ className, children }: TypographyProps) => (
    <h2
        className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
        )}
    >
        {children}
    </h2>
);

export const H3 = ({ className, children }: TypographyProps) => (
    <h3
        className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
        )}
    >
        {children}
    </h3>
);

export const H4 = ({ className, children }: TypographyProps) => (
    <h4
        className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
        )}
    >
        {children}
    </h4>
);

export const P = ({ className, children }: TypographyProps) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
        {children}
    </p>
);

export const Blockquote = ({ className, children }: TypographyProps) => (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
        {children}
    </blockquote>
);

export const InlineCode = ({ className, children }: TypographyProps) => (
    <code
        className={cn(
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
            className
        )}
    >
        {children}
    </code>
);

export const Lead = ({ className, children }: TypographyProps) => (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
);

export const Large = ({ className, children }: TypographyProps) => (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
);

export const Small = ({ className, children }: TypographyProps) => (
    <small className={cn("text-sm font-medium leading-none", className)}>
        {children}
    </small>
);

export const Muted = ({ className, children }: TypographyProps) => (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
);
