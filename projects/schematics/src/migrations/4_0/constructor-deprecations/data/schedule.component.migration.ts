import {
  SCHEDULE_COMPONENT,
  STORE_DATA_SERVICE,
} from '../../../../shared/constants';
import { SPARTACUS_STOREFINDER } from '../../../../shared/libs-constants';
import { ConstructorDeprecation } from '../../../../shared/utils/file-utils';

export const SCHEDULE_COMPONENT_MIGRATION: ConstructorDeprecation = {
  // feature-libs/storefinder/components/schedule-component/schedule.component.ts
  class: SCHEDULE_COMPONENT,
  importPath: SPARTACUS_STOREFINDER,
  deprecatedParams: [
    {
      className: STORE_DATA_SERVICE,
      importPath: SPARTACUS_STOREFINDER,
    },
  ],
  removeParams: [
    {
      className: STORE_DATA_SERVICE,
      importPath: SPARTACUS_STOREFINDER,
    },
  ],
};
