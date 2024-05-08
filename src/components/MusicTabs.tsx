import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlbumCards from "./AlbumCards";
import ArtistCards from "./ArtistCards";

export default function MusicTabs() {
  return (
    <Tabs
      defaultValue="albums"
      className="mb-4"
    >
      <TabsList className="grid w-full grid-cols-2 gap-4">
        <TabsTrigger value="albums">Favorite Albums</TabsTrigger>
        <TabsTrigger value="artists">Favorite Artists</TabsTrigger>
      </TabsList>
      <TabsContent value="albums">
        <AlbumCards />
      </TabsContent>
      <TabsContent value="artists">
        <ArtistCards />
      </TabsContent>
    </Tabs>
  );
}
