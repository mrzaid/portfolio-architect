import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zaid Ahmed Portfolio" },
      { name: "description", content: "A React personal portfolio website builder with a fixed sidebar, dynamic sections, and responsive design." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Zaid Ahmed Portfolio" },
      { property: "og:description", content: "A React personal portfolio website builder with a fixed sidebar, dynamic sections, and responsive design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Zaid Ahmed Portfolio" },
      { name: "twitter:description", content: "A React personal portfolio website builder with a fixed sidebar, dynamic sections, and responsive design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fa9b45f7-2b2b-4865-a7c7-c25ad5563f8f/id-preview-e7ead988--ef5b0866-67f2-4759-a87f-9e5c94eed4b5.lovable.app-1777658692778.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fa9b45f7-2b2b-4865-a7c7-c25ad5563f8f/id-preview-e7ead988--ef5b0866-67f2-4759-a87f-9e5c94eed4b5.lovable.app-1777658692778.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
