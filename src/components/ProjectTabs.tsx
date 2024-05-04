import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectTabs() {
  return (
    <Tabs
      defaultValue="bookshelf"
      className="w-[100%] text-base"
    >
      <TabsList className="grid w-full grid-cols-2 gap-4">
        <TabsTrigger value="bookshelf">Bookshelf</TabsTrigger>
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
      </TabsList>
      <TabsContent value="bookshelf">
        <div className="grid w-full grid-rows-2 sm:grid-cols-2 gap-4">
          <div className="h-24"></div>
          <p>
            Bookshelf app made with vanilla JavaScript. This was my
            <strong>first ever</strong> mini project stepping into the front-end
            dev world, it's basically a <i>todo app</i>. I want to rebuild this
            app with a full stack framework soon, we'll see how it goes ;).
          </p>
        </div>
      </TabsContent>
      <TabsContent value="calculator">
        <div className="grid w-full grid-rows-2 sm:grid-cols-2 gap-4">
          <div className="h-24"></div>
          <p>
            Soon to be made Calculator app, I intend to build it with{" "}
            <strong>React</strong>. This is only a preview of the UI I made in
            figma.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
