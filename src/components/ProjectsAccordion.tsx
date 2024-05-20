import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Project, getProjects } from "@/lib/projects";

const projects: Project[] = getProjects();

function chunkArray(array: Project[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

const projectChunks = chunkArray(projects, 3);

export default function ProjectsAccordion() {

  return (
    <>
      {projectChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="flex flex-col lg:flex-row gap-8">
          {chunk.map((project, index) => (
            <Accordion key={index} type="single" defaultValue={`item-${index + 1}`} collapsible className="w-full">
              <AccordionItem value={`item-${index + 1}`} className="md:mb-8">
                <AccordionTrigger>{project.title}</AccordionTrigger>

                <AccordionContent>
                  {project.description}
                  
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="underline underline-offset-8 hover:decoration-zinc-500"
                    aria-label={`link to ${project.title} github repo`}
                  >
                    <p className="mt-4">github repo 📂</p>
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ))}
    </>
  );
}
