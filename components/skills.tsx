import { Card, CardContent } from "./ui/card";

export function Skills() {
  return (
    <div>
      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8 max-w-5xl mx-auto"
        id="skills"
      >
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">Powered by Next.js 15 + Turbopack.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Beautiful</h3>
            <p className="text-gray-600">Styled with Tailwind + shadcn/ui.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Scalable</h3>
            <p className="text-gray-600">Ready for production deployment.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
