import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children
}: {
  titleComponent: string | ReactNode;
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[52rem] items-center justify-center p-2 md:h-[72rem] md:p-12 lg:h-[80rem]"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-28"
        style={{
          perspective: "1000px"
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

type HeaderProps = {
  translate: MotionValue<number>;
  titleComponent: string | ReactNode;
};

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
      {titleComponent}
    </motion.div>
  );
};

type CardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: ReactNode;
};

export const Card = ({ rotate, scale, translate: _translate, children }: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        transformStyle: "preserve-3d"
      }}
      className="-mt-10 mx-auto h-[22rem] w-full max-w-5xl rounded-[30px] border-4 border-[#3f3f3f] bg-[#141414] p-2 shadow-2xl md:-mt-12 md:h-[36rem] md:p-5 lg:h-[40rem]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-950 md:rounded-2xl md:p-3">
        {children}
      </div>
    </motion.div>
  );
};
