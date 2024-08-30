"use clients";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <Button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        title="left button"
      >
        <PiCaretLeftBold className={iconStyles} />
      </Button>
      <Button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        title="right button"
      >
        <PiCaretRightBold className={iconStyles} />
      </Button>
    </div>
  );
};

export default WorkSliderBtns;
