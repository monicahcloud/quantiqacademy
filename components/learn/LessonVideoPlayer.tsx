import { PlayCircle } from "lucide-react";

export default function LessonVideoPlayer({
  videoUrl,
  title,
}: {
  videoUrl?: string | null;
  title: string;
}) {
  if (!videoUrl) {
    return (
      <div className="overflow-hidden rounded-[2rem] bg-[#041f3d] shadow-2xl">
        <div className="flex aspect-video items-center justify-center">
          <div className="text-center text-white">
            <PlayCircle className="mx-auto text-cyan-400" size={70} />
            <h2 className="mt-5 text-3xl font-black">Video Lesson</h2>
            <p className="mt-3 text-white/60">
              Video content for {title} will be added soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] bg-black shadow-2xl">
      <video src={videoUrl} controls className="aspect-video w-full" />
    </div>
  );
}
