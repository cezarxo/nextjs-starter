import { Loader2 } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-6">
          <Logo size="lg" showText={false} />
        </div>
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Welcome to Marhaba Auction
        </h2>
        <p className="text-muted-foreground">
          Loading premium used car auctions...
        </p>
      </div>
    </div>
  );
}
