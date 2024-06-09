import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type Project, getProjects } from '@/lib/projects';

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
        <div
          key={chunkIndex}
          className="flex flex-col lg:flex-row gap-8 my-8 lg:my-0"
        >
          {chunk.map((project, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value={`item-${index + 1}`}
                className="md:mb-8"
              >
                <AccordionTrigger>{project.title}</AccordionTrigger>

                <AccordionContent>
                  {project.description}

                  <div className="flex gap-4 justify-start items-start">
                    <a
                      href={project.link}
                      target="_blank"
                      className="underline underline-offset-8 transition ease-in-out hover:decoration-zinc-500"
                      aria-label={`link to ${project.title} github repo`}
                    >
                      <p className="mt-4">github repo 📂</p>
                    </a>

                    {project.webLink && (
                      <a
                        href={project.webLink}
                        target="_blank"
                        className="underline underline-offset-8 transition ease-in-out hover:decoration-zinc-500"
                        aria-label={`link to ${project.title}`}
                      >
                        <p className="mt-4">preview 🔗</p>
                      </a>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ))}
    </>
  );
}
