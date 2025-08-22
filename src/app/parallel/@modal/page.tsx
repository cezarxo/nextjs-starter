import { ArrowRight, CheckCircle, Info, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ModalPage() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-blue-500" />
            <CardTitle>Parallel Routes</CardTitle>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/parallel">
              <X className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription>
            This modal demonstrates parallel routes in Next.js 15. The @modal
            slot renders this content alongside the main page content.
          </CardDescription>

          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Modal renders in parallel with main content</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>URL structure: /parallel/@modal</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>File: app/parallel/@modal/page.tsx</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button asChild className="w-full">
              <Link href="/parallel">
                <ArrowRight className="mr-2 h-4 w-4" />
                Continue to Main Page
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
