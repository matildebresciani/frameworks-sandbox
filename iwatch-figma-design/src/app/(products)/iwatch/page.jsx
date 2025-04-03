import Button from "@/components/Button";
import PageIndicator from "@/components/Pageindicator";
import Gallery from "@/components/gallery/Gallery";

export default function iWatch() {
  return (
    <main>
      <div className="flex flex-col items-start justify-between pt-16">
        <div>
          <h1 className="text-6xl leading-tight text-white font-bold">
            The Perfect Moment
          </h1>
          <h2 className="text-6xl leading-tight text-white">
            Between Past And Future.
          </h2>
        </div>
        <Button label="Buy Now" />
        <PageIndicator />
      </div>
      <Gallery />
    </main>
  );
}
