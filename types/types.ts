import type { ReactNode } from "react";

// Shared
export interface CtaButton {
  label: string;
  href?: string;
}

// FeatureShowcase (sub-types are internal — not exported)
interface ShowcaseCard {
  number: string;
  title: string;
  description?: string;
  glow: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  bgImageSrc?: string;
  imageClassName?: string;
}

interface ShowcaseRow {
  cards: ShowcaseCard[];
}

export interface FeatureShowcaseProps {
  headingStart: string;
  headingHighlight: string;
  description: string;
  rowOne: ShowcaseRow;
  rowTwo: ShowcaseRow;
  cta?: CtaButton;
  showShapeBg?: boolean;
  showGradientBg?: boolean;
}

// SplitFeature
export type FloatingCardPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type FloatingCardShape = "rounded" | "pill";

export interface FloatingCard {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  subtitle: string;
  /** Corner of the visual to anchor the card */
  position: FloatingCardPosition;
  /** CSS background value — defaults to dark glassmorphism */
  gradient?: string;
  /** Card border-radius style — defaults to "rounded" */
  shape?: FloatingCardShape;
}

export interface BackgroundLayer {
  /** Scale relative to the main card — auto-calculated if omitted (1.06, 1.12, …) */
  scale?: number;
  /** Layer opacity — auto-calculated if omitted (0.45, 0.28, …) */
  opacity?: number;
  /** Optional CSS background-image for this layer */
  gradient?: string;
}

export interface SplitFeatureVisual {
  /** Center image */
  imageSrc: string;
  imageAlt: string;
  /** Intrinsic dimensions of the image — must match the actual file to avoid distortion */
  imageWidth?: number;
  imageHeight?: number;
  /** Optional background video. Falls back to a plain dark card if omitted. */
  videoSrc?: string;
  /** Optional left + right flanking images rendered at a smaller scale */
  sideImages?: [{ src: string; alt: string }, { src: string; alt: string }];
  /** CSS background-image value applied to the visual card (e.g. a radial gradient glow) */
  backgroundGradient?: string;
  /** Floating overlay cards positioned at the corners of the visual */
  floatingCards?: FloatingCard[];
  /** Decorative rounded-rect layers stacked behind the main visual */
  backgroundLayers?: BackgroundLayer[];
  /** When true, the card background is transparent instead of the default dark */
  transparent?: boolean;
  /** Optional decorative layer image rendered behind the main visual */
  layerSrc?: string;
}

export interface SplitFeatureProps {
  /** Plain heading prefix rendered in the bold sans style */
  headingStart: string;
  /** Italic serif suffix rendered in the silver-gradient style */
  headingHighlight: string;
  /** When true, headingHighlight renders on its own line below headingStart */
  headingHighlightNewLine?: boolean;
  paragraphs: string[];
  cta?: CtaButton;
  visual: SplitFeatureVisual;
  /** When true, the visual column appears on the left and text on the right */
  visualLeft?: boolean;
}

// StandardsHero
export interface StandardsHeroProps {
  titleStart: string;
  titleHighlight: string;
  titleHighlightNewLine?: boolean;
  description: string;
  buttons?: readonly CtaButton[];
}

// WhatMakesDifferent
export interface CardData {
  id: number;
  text: string;
  icon: ReactNode;
  gradient: string;
  iconColor: string;
}

// OurFoundation
export interface FoundationItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface OurFoundationProps {
  cta?: CtaButton;
}

// ProductCard
export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  tags: string[];
  price: string;
  image: string;
}
