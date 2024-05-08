import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    title: "Bookshelf",
    link: "https://github.com/ausathdzil/bookshelf-app",
    description: (
      <p>
        Bookshelf app made with <strong>vanilla JavaScript</strong>. 
        This is my first mini project diving into the front-end world.
      </p>
    ),
  },
  {
    title: "Social Linktree",
    link: "https://github.com/ausathdzil/social-links",
    description: (
      <p>
        A simple social linktree. My first <strong>React</strong> 
        and <strong>Tailwind CSS</strong> mini project.
      </p>
    ),

  },
  {
    title: "Terminal Quiz",
    link: "https://github.com/ausathdzil/quiz-app",
    description: (
      <p>
        A quiz game that runs on your terminal. Made with <strong>C</strong>.
      </p>
    ),
  },
];

export default function ProjectsAccordion() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {projects.map((project, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{project.title}</AccordionTrigger>

            <AccordionContent>
              {project.description}
              
              <a 
                href={project.link} 
                target="_blank"
                className="underline underline-offset-8 hover:decoration-zinc-500"
              >
                <p className="mt-4">
                  github repo 📂
                </p>
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
