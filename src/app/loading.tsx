import { Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-6">
          <Logo />
        </div>
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-foreground mb-2">Loading</h2>
        <p className="text-muted-foreground">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  );
}
