import Button from "@/components/Button";
import PageIndicator from "@/components/Pageindicator";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <main>
      <div className="landing-page-left">
        <div>
          <h1>The Perfect Moment</h1>
          <h2>Between Past And Future.</h2>
        </div>
        <Button label="Buy Now" />
        <PageIndicator />
      </div>
      <Gallery />
    </main>
  );
}
