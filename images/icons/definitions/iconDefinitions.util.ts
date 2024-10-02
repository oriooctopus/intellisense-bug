/* eslint-disable no-restricted-imports */
import camelcase from './camelCase';
import {IconDefinitionType} from './iconDefinitions.types';

// Extract the component name from the svg path
// example:
//   General/Remain Same -> RemainSame
//   General/Room_menu -> RoomMenu
//   Arrow _ Caret/Sort/Ascending -> SortAscending
//   Group/Host/Cluster -> HostCluster
const extractNameFromSvg = (name: string): string => {
  const segments: Array<string> = name.split('/');
  const filename: string = segments.pop() || '';
  return segments.length > 1
    ? `${segments[segments.length - 1]} ${filename}`
    : filename;
};

export const extractComponentName = (icon: IconDefinitionType): string => {
  // Get component name, icon.componentName is priority
  let componentName = camelcase(
    icon.componentName || extractNameFromSvg(icon.svgFilename),
    {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    },
  );

  // Component name should end with "Icon"
  if (!/.*Icon?/i.test(componentName)) {
    // Add missing "Icon" suffix
    componentName = `${componentName}Icon`;
  }

  return componentName;
};
