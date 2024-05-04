import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ProjectTabs() {
  return (
    <Tabs defaultValue="bookshelf" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="bookshelf">Bookshelf</TabsTrigger>
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
        <TabsTrigger value="other-works">Other Works</TabsTrigger>
      </TabsList>
      <TabsContent value="bookshelf">
        Bookshelf app made with vanilla JavaScript.
      </TabsContent>
      <TabsContent value="calculator">
        Soon to be made Calculator app, 
        I intend to build it with <strong>React</strong>. Here's a preview of the UI I made in figma.
      </TabsContent>
      <TabsContent value="other-works">
        Right now I'm working with KSM Android UPNVJ on an internal project, we're building a LMS.
      </TabsContent>
    </Tabs>
  )
}
