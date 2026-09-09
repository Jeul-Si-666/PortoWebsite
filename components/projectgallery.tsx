import Image from "next/image";

type GalleryImage = {
  src: string;
  caption: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="space-y-6">
      {/* Main Image */}
      {images[0] && (
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden border border-black/10 bg-[#e9e7e0]">
            <Image
              src={images[0].src}
              alt={images[0].caption}
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>

          <figcaption className="mt-3 text-xs text-black/40">
            {images[0].caption}
          </figcaption>
        </figure>
      )}

      {/* Secondary Images */}
      {images.length > 1 && (
        <div className="grid gap-6 md:grid-cols-2">
          {images.slice(1).map((image, index) => (
            <figure key={`${image.src}-${index}`}>
              <div className="relative aspect-[4/3] overflow-hidden border border-black/10 bg-[#e9e7e0]">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>

              <figcaption className="mt-3 text-xs text-black/40">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}