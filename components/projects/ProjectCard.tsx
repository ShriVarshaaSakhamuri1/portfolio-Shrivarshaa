import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  Url?: string;
  keyFeatures: string[];
  categories: string[];
  projectType?: string;
  dates?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function BlankProjectImage() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <img
        src="/nopreview.png"
        alt="No Preview Available"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function ImageCarousel({
  images,
  currentIndex,
  onNext,
  onPrev,
  showControls = true,
}: {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  showControls?: boolean;
}) {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageError = (imageSrc: string) => {
    setFailedImages((prev) => ({ ...prev, [imageSrc]: true }));
  };

  const allImagesFailed = images.every((img) => failedImages[img]);

  if (allImagesFailed) {
    return <BlankProjectImage />;
  }

  return (
    <div className="group relative overflow-hidden bg-black">
      <motion.div
        className="aspect-[16/9] relative"
        initial={false}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex w-full h-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="h-full w-full flex-shrink-0 bg-black"
              initial={false}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {failedImages[image] ? (
                <BlankProjectImage />
              ) : (
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="h-full w-full object-contain"
                  onError={() => handleImageError(image)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      {showControls && !allImagesFailed && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md border border-[var(--border-raw)] bg-background/90 p-1 text-foreground/80 opacity-0 transition-opacity hover:text-primary group-hover:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-[var(--border-raw)] bg-background/90 p-1 text-foreground/80 opacity-0 transition-opacity hover:text-primary group-hover:opacity-100"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/25"
                }`}
                initial={false}
                animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <>
      <motion.div
        className="interactive-card group relative flex h-[430px] cursor-pointer flex-col overflow-hidden rounded-lg border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image */}
        <div className="relative aspect-[16/9] border-b border-[var(--border-raw)] bg-black">
          {!project.images ||
          !Array.isArray(project.images) ||
          project.images.length === 0 ? (
            <BlankProjectImage />
          ) : (
            <ImageCarousel
              images={project.images}
              currentIndex={currentImageIndex}
              onNext={handleNextImage}
              onPrev={handlePrevImage}
              showControls={isHovered}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="font-mono text-xs text-primary">View Details</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-foreground">
            {project.title}
          </h3>
          {(project.projectType || project.dates) && (
            <p className="mb-3 line-clamp-1 font-mono text-[11px] font-medium text-primary">
              {[project.projectType, project.dates].filter(Boolean).join(" / ")}
            </p>
          )}
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="rounded-md border-[var(--border-raw)] bg-[var(--surface-elevated)] px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge
                variant="outline"
                className="rounded-md border-[var(--border-raw)] bg-[var(--surface-elevated)] px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
          <div className="mt-auto flex items-center gap-2 font-mono text-xs text-primary">
            <span>View Project</span>
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-3 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="terminal-panel relative max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 z-50 text-muted-foreground hover:text-primary"
            >
              <X size={14} />
            </button>

            <div className="p-5">
              {/* Header */}
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                {project.title}
              </h2>
              {(project.projectType || project.dates) && (
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  {[project.projectType, project.dates]
                    .filter(Boolean)
                    .join(" / ")}
                </p>
              )}

              {/* Project Image */}
              <div className="relative rounded-lg overflow-hidden mb-3">
                {!project.images ||
                !Array.isArray(project.images) ||
                project.images.length === 0 ? (
                  <BlankProjectImage />
                ) : (
                  <ImageCarousel
                    images={project.images}
                    currentIndex={currentImageIndex}
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                    showControls={true}
                  />
                )}
              </div>

              <div className="space-y-3">
                {/* Description */}
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h3 className="text-xs font-semibold mb-1">Technologies</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.keyFeatures && (
                  <div>
                    <h3 className="text-xs font-semibold mb-1">Key Features</h3>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-3 columns-2 gap-x-6">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-2 pt-1">
                  {project.Url && (
                    <a
                      href={project.Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 px-2.5 py-1 rounded"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View URL
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs bg-muted hover:bg-muted/80 px-2.5 py-1 rounded"
                    >
                      <Github className="h-3 w-3" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
