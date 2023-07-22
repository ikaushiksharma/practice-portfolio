'use client';
import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { DiReact } from 'react-icons/di';
import { BiLogoTypescript, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi';
import { SiTailwindcss, SiEslint, SiPrisma } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import PlainButton from './PlainButton';
const data = [
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 1',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiaetags reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 2',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 1',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 2',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 1',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 2',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 1',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Project 2',
    subtitle: 'A subtitle kinda',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laborum a. Quis, commodi adipisci. Fuga facere quas quibusdam, libero molestiae reiciendis culpa deleniti cum voluptas itaque qui eum dicta vitae enim commodi hic nesciunt ipsum similique? Asperiores a vero sequi, expedita temporibus qui. Iusto totam itaque, provident iure voluptatibus architecto',
    tags: [
      { name: 'ReactJs', icon: <DiReact /> },
      { name: 'NextJS', icon: <TbBrandNextjs /> },
      { name: 'TypeScript', icon: <BiLogoTypescript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    ],
  },
];
export default function CardSliderWithData() {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const content = data[activeSlide].description;
    const contentArray = content.split(' ');
    let currentIndex = 0;
    if (el.current) el.current.innerHTML = '';
    const typingInterval = setInterval(() => {
      if (el.current) {
        el.current.innerHTML += contentArray[currentIndex];
        el.current.innerHTML += ' ';
        currentIndex++;
      }

      if (currentIndex === contentArray.length) {
        // if (el.current) el.current.innerHTML = '';
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [activeSlide]);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="w-full sm:h-[70vh] relative sm:gap-y-0 z-0 flex sm:flex-row flex-col-reverse items-center">
      <div className="w-full sm:w-2/5 relative sm:h-[90%] md:h-3/4 p-2 lg:p-5 rounded-xl">
        <motion.h1
          key={activeSlide}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left mb-1 lg:mb-2"
        >
          <span className="font-semibold">{data[activeSlide].title}</span>,{' '}
          {data[activeSlide].subtitle}
        </motion.h1>
        <div className="w-full text-center sm:text-left overflow-y-scroll text-xs p-1 sm:pt-2 lg:pt-4 sm:text-sm">
          <span ref={el}></span>
        </div>
        <div className="px-5 space-x-10 hidden sm:flex items-center justify-center sm:justify-start absolute bottom-0 inset-x-0">
          <button
            className="transition-all duration-200 bg-tertiary rounded-full p-1 hover:bg-opacity-75"
            onClick={prevHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="transition-all duration-200 bg-tertiary rounded-full p-1 hover:bg-opacity-75"
            onClick={nextHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full xs:w-4/5 sm:w-3/5 relative h-4/5 py-1 lg:py-5">
        <Swiper
          className="relative"
          //@ts-ignore
          modules={[Autoplay, Scrollbar, Navigation]}
          autoplay={{
            delay: 5000,
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            setSwiperRef(swiper);
          }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              centeredSlides: false,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.4,
              centeredSlides: false,
              spaceBetween: 50,
            },
          }}
          grabCursor={true}
          loop={true}
          scrollbar={{ draggable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`aspect-[3/3.5] flex justify-between flex-col p-4 rounded-lg ${
                  index % 2 === 0
                    ? 'bg-secondary text-primary'
                    : 'bg-tertiary text-secondary'
                }`}
              >
                <img
                  src={item.image}
                  className="w-full rounded-lg aspect-video"
                  alt=""
                />
                <div className="flex flex-wrap gap-x-1">
                  {item.tags.map((tag, idx) => (
                    <Tag key={idx} id={index}>
                      <div className="w-full h-full flex items-center justify-between">
                        {tag.icon}
                      </div>
                      <div>{tag.name}</div>
                    </Tag>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap sm:flex-nowrap space-x-2">
                  <PlainButton
                    small
                    classes={`${
                      index % 2 == 0
                        ? 'bg-tertiary text-secondary hover:scale-105 transition-all'
                        : 'text-tertiary bg-secondary hover:scale-105 transition-all'
                    }`}
                  >
                    Github
                  </PlainButton>
                  <PlainButton
                    small
                    classes={`${
                      index % 2 == 0
                        ? 'bg-tertiary text-secondary hover:scale-105 transition-all'
                        : 'text-tertiary bg-secondary hover:scale-105 transition-all'
                    }`}
                  >
                    Project
                  </PlainButton>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
  id: number;
};

export function Tag({ children, id }: Props) {
  return (
    <div
      className={`px-1.5 py-0.5 border flex my-1 w-fit text-xs rounded-full ${
        id % 2 == 0
          ? 'text-primary hover:text-secondary hover:bg-tertiary transition-colors duration-200'
          : 'text-secondary hover:text-tertiary hover:bg-secondary transition-colors duration-200'
      }`}
    >
      {children}
    </div>
  );
}
