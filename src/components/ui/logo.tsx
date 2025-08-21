import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
    size?: "sm" | "md" | "lg";
    href?: string;
}

export function Logo({
    className,
    showText = true,
    size = "md",
    href = "/",
}: LogoProps) {
    const sizeClasses = {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
    };

    const textSizes = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-3xl",
    };

    const subtitleSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    const LogoContent = () => (
        <div className={cn("flex items-center space-x-3 group", className)}>
            {/* Abstract Graphic Element */}
            <div className={cn("relative", sizeClasses[size])}>
                <div className="w-full h-full bg-primary rounded-sm relative overflow-hidden">
                    {/* Three vertical bars on the left */}
                    <div className="absolute left-1 top-1 bottom-1 w-0.5 bg-white rounded-full" />
                    <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-white rounded-full" />
                    <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-white rounded-full" />

                    {/* Angular shape on the right */}
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                        <div className="absolute right-0 top-0 w-full h-full bg-white transform skew-x-12 origin-top-left" />
                    </div>
                </div>

                {/* Hover effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Text */}
            {showText && (
                <div className="flex flex-col">
                    <span
                        className={cn(
                            "font-bold text-primary leading-tight",
                            textSizes[size],
                        )}
                    >
                        Marhaba
                    </span>
                    <span
                        className={cn(
                            "text-muted-foreground font-medium leading-tight",
                            subtitleSizes[size],
                        )}
                    >
                        Auction
                    </span>
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="hover:opacity-90 transition-opacity">
                <LogoContent />
            </Link>
        );
    }

    return <LogoContent />;
}
