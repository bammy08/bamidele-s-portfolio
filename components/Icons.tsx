import React from 'react';
import {
  FaGit,
  FaDocker,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiAwslambda,
  SiMongodb,
  SiJest,
  SiKubernetes,
} from 'react-icons/si';
import { TbBrandGraphql } from 'react-icons/tb';

export const TechIcons = {
  git: FaGit as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  docker: FaDocker as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  react: FaReact as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  figma: FaFigma as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  node: FaNodeJs as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  css: FaCss3Alt as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  html: FaHtml5 as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  ts: SiTypescript as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  nextjs: SiNextdotjs as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  aws: SiAwslambda as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  mongo: SiMongodb as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  jest: SiJest as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  k8s: SiKubernetes as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  graphql: TbBrandGraphql as React.ComponentType<React.SVGProps<SVGSVGElement>>,
};

export const IconSizes = {
  default: 'w-8 h-8',
  small: 'w-6 h-6',
  large: 'w-12 h-12',
};

export type TechIcon = keyof typeof TechIcons;
