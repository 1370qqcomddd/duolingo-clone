import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" alt="Pro" height={26} width={26} />

          <h3 className="text-lg font-bold">升级至 Hippo+</h3>
        </div>

        <p className="text-muted-foreground">无限橙子，学习高效神速、乐趣无穷!</p>
      </div>

      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop">现在就升级!</Link>
      </Button>
    </div>
  );
};
