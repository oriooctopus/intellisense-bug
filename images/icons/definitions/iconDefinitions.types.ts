/* eslint-disable no-restricted-imports */
import {IconCategoryEnum} from './iconDefinitions.enums';

export type IconDefinitionType = {
  svgFilename: string;
  componentName?: string;
  category?: IconCategoryEnum;
  tags?: Array<string>;
  keepColors?: boolean;
};
