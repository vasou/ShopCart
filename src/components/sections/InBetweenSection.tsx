import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface InBetweenSectionProps {
  type: string;
  bgImg?: string;
  bgColor?: string;
  heading: string;
  description: string;
}

export default function InBetweenSection({
  type,
  bgImg,
  bgColor,
  heading,
  description,
}: InBetweenSectionProps) {
  return (
    <>
      {type === "layoutOne" && (
        <section
          className="bg-center bg-no-repeat bg-cover bg-gray-100"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div className="content-container">
            <div className="py-28 max_md:py-14 flex justify-end">
              <div className="p-16 max_lg:p-14 max_s:p-12 max-w-[500px] bg-toneGreen">
                <h2 className="pb-4 text-[52px] leading-[60px] max_xl:text-9xl max_md:text-7xl text-background font-bold">
                  {heading}
                </h2>
                <p className="pb-8 text-xl max_lg:text-lg text-background">
                  {description}
                </p>
                <Button variant={"outline"} className="mega-button" asChild>
                  <Link to={""}>Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
      {type === "layoutTwo" && (
        <section className={`${bgColor === "yellow" && "bg-toneYellow/20"}`}>
          <div className="content-container">
            <div className="py-28 max_md:py-14 grid grid-cols-2 max_lg:grid-cols-1">
              <div>
                <h2 className="pb-4 text-[52px] leading-[60px] max_xl:text-9xl max_md:text-7xl font-bold">
                  {heading}
                </h2>
                <p className="pb-8 text-xl max_lg:text-lg">{description}</p>
                <Button variant={"outline"} className="mega-button" asChild>
                  <Link to={""}>Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
