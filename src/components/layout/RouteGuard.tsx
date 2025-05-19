"use client";

import NotFound from "@/app/not-found";
import { Spinner } from "@/components/layout";
import { validRoutes } from "@/resources";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setIsRouteEnabled(false);

      const checkRouteEnabled = () => {
        if (!pathname) return false;

        if (pathname in validRoutes) {
          return validRoutes[pathname as keyof typeof validRoutes];
        }

        const dynamicRoutes = ["/work"] as const;
        for (const route of dynamicRoutes) {
          if (pathname?.startsWith(route) && validRoutes[route]) {
            return true;
          }
        }

        return false;
      };

      const routeEnabled = checkRouteEnabled();
      setIsRouteEnabled(routeEnabled);
      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex w-full py-32 justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isRouteEnabled) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
