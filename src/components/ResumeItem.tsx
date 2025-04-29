
import { cn } from "@/lib/utils";

interface ResumeItemProps {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  items?: string[];
  skills?: string[];
  className?: string;
}

export default function ResumeItem({ 
  title, 
  subtitle, 
  date, 
  description, 
  items, 
  skills,
  className
}: ResumeItemProps) {
  return (
    <div className={cn("pb-8 relative pl-7 border-l border-border last:border-0 last:pb-0", className)}>
      {/* Circle marker on timeline */}
      <div className="absolute w-4 h-4 bg-theme-500 rounded-full -left-2 mt-2" />
      
      <div className="space-y-2">
        <div className="flex justify-between flex-wrap">
          <h3 className="text-lg font-bold font-display">{title}</h3>
          {date && <span className="text-sm text-muted-foreground">{date}</span>}
        </div>
        
        {subtitle && (
          <p className="font-medium text-theme-500">{subtitle}</p>
        )}
        
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        
        {items && items.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map(skill => (
              <span 
                key={skill} 
                className="inline-block px-2 py-1 rounded-lg text-xs bg-secondary text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
