import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section"
import { cn } from "@/lib/utils";

export default function Header() {

  return (
    <header className="sticky top-0 py-4">
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold '>
          Simon GALLIEN
        </h1>
        <div className='flex-1'/>
          <ul className="flex items-center gap-2">
            <a  
              href="https://github.com/SimonGallien"
              className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            >
              <GithubIcon size={12} className="text-foreground"/>
            </a>
            <a  
              href="https://www.linkedin.com/in/simongallien/"
              className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            >
              <LinkedinIcon size={12} className="text-foreground"/>
            </a>
          </ul>
      </Section>
    </header>
  );
}
