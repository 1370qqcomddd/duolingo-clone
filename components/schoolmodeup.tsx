import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const schoolmodeup = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" alt="Pro" height={26} width={26} />

          <h3 className="text-lg font-bold">功能预告 HMAX For School</h3>
        </div>

        <p className="text-muted-foreground">专为辅助教学而设计的免费工具，让学生们在课堂内外都能用多邻国学外语!</p>
      </div>

      <Button variant="schoolup" className="w-full" size="lg" asChild>
        <Link href="/shop">近期上线 尽请期待</Link>
      </Button>
    </div>
  );
};