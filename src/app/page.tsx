import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/04e3da61-b997-4d7d-a419-fe9eee7dfbd0-nm33wo.jpeg",
  "https://utfs.io/f/6fe1186b-21e3-42f3-ad70-2c70744c3510-1x98cg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
