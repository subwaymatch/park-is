"use client";

import { useFrame } from "@react-three/fiber";
import { type ReactNode, useEffect, useRef, useState } from "react";
import type { Group } from "three";
import {
  AppleWatch,
  Billboard,
  Book,
  BusShelter,
  GreetingCard,
  IPhone,
  Laptop,
  MockupCanvas,
  PosterFrame,
  ProductBox,
  usePrefersReducedMotion,
} from "react-3d-mockups";
import {
  BookCover,
  BookSpine,
  CameraPoster,
  CraneCard,
  PRODUCTS,
  ShopDesktop,
  ShopPhone,
  ShopWatch,
  SneakerBoard,
  SneakerSixSheet,
  TeaFront,
  TeaSide,
} from "./react-3d-mockups-screens";

/** Phones get the same scenes from further back. */
function useNarrow() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const update = () => setNarrow(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return narrow;
}

/**
 * Swings its children slowly about the vertical axis, so a still scene keeps
 * moving without turning its back on the viewer. Off screen the canvas stops
 * drawing, and with it this animation; under reduced motion it holds still.
 */
function Sway({ children, amount = 0.32, speed = 0.22 }: { children: ReactNode; amount?: number; speed?: number }) {
  const ref = useRef<Group>(null);
  const reduced = usePrefersReducedMotion();
  useFrame((state) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * amount;
    state.invalidate();
  });
  return <group ref={ref}>{children}</group>;
}

/** A shop on three devices, one React state: the featured product moves on every few seconds. */
export function DeskScene() {
  const reduced = usePrefersReducedMotion();
  const narrow = useNarrow();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % PRODUCTS.length), 3500);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <MockupCanvas
      label="A MacBook, an iPhone and an Apple Watch showing one shop"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, narrow ? 18 : 11], fov: 34 }}
    >
      <Sway>
        <Laptop variant="air13" position={narrow ? [0, 0.9, 0] : [-0.6, -0.2, 0]} rotation={[0, 0.12, 0]}>
          <ShopDesktop active={active} />
        </Laptop>
        <IPhone
          variant="17"
          position={narrow ? [1.5, -2.2, 2.2] : [3.9, -0.35, 1.3]}
          rotation={[0, -0.35, 0]}
          scale={0.62}
          statusBar
        >
          <ShopPhone active={active} />
        </IPhone>
        <AppleWatch
          variant="series11"
          position={narrow ? [-1.7, -2.6, 2.6] : [-3.9, -1.2, 1.6]}
          rotation={[-0.2, 0.45, 0]}
          scale={0.24}
        >
          <ShopWatch active={active} />
        </AppleWatch>
      </Sway>
    </MockupCanvas>
  );
}

/** Print and packaging: a book, a tea carton, a framed poster and a card, each wearing its own artwork. */
export function ShelfScene() {
  const narrow = useNarrow();
  return (
    <MockupCanvas
      label="A hardback, a tea carton, a framed poster and a greeting card"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, narrow ? 24 : 14], fov: 34 }}
    >
      <Sway>
        <PosterFrame position={[-0.4, 0.4, -1.4]} color="#1b1b19">
          <CameraPoster />
        </PosterFrame>
        <Book position={[-4.4, -0.4, 0.6]} rotation={[0, 0.5, 0]} color="#2c2a22">
          <BookCover />
          <Book.Spine>
            <BookSpine />
          </Book.Spine>
        </Book>
        <ProductBox position={[4.5, -0.3, 0.4]} rotation={[0, -0.55, 0]} color="#23412f">
          <TeaFront />
          <ProductBox.Right>
            <TeaSide />
          </ProductBox.Right>
          <ProductBox.Left>
            <TeaSide />
          </ProductBox.Left>
        </ProductBox>
        <GreetingCard position={[-1.7, -1.8, 2.6]} rotation={[0, -0.35, 0]} scale={0.5} color="#f6efe9">
          <CraneCard />
        </GreetingCard>
      </Sway>
    </MockupCanvas>
  );
}

/** One campaign on the street: a 14 × 48 ft billboard and a bus shelter's 6-sheet. */
export function StreetScene() {
  const narrow = useNarrow();
  return (
    <MockupCanvas
      label="A billboard and a bus shelter carrying one sneaker campaign"
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.5, narrow ? 22 : 15], fov: 34 }}
    >
      <Sway>
        <Billboard position={[-2.2, 0.7, -1.2]} rotation={[0, 0.22, 0]}>
          <SneakerBoard />
        </Billboard>
        <BusShelter position={[3.6, -0.5, 1.2]} rotation={[0, -1.2, 0]} scale={0.7}>
          <SneakerSixSheet />
        </BusShelter>
      </Sway>
    </MockupCanvas>
  );
}
