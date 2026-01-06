import { useEffect, useRef, useState } from "react";

export function useHomePage() {
  const preloaderRef = useRef(null);
  const sidebarRef = useRef(null);
  const scrollTopRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(-1);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add("fade-out");
        setTimeout(() => {
          preloaderRef.current.style.display = "none";
        }, 500);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Sidebar
  const openSidebar = () => sidebarRef.current?.classList.add("active");
  const closeSidebar = () => sidebarRef.current?.classList.remove("active");

  // Scroll button
  useEffect(() => {
    const onScroll = () => {
      if (!scrollTopRef.current) return;
      window.scrollY > 300
        ? scrollTopRef.current.classList.add("show")
        : scrollTopRef.current.classList.remove("show");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // FAQ
  const toggleFaq = (i) =>
    setActiveFaq(activeFaq === i ? -1 : i);

  // Anchor scroll
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  return {
    preloaderRef,
    sidebarRef,
    scrollTopRef,
    activeFaq,
    openSidebar,
    closeSidebar,
    toggleFaq,
    scrollToTop,
    handleAnchorClick,
  };
}
