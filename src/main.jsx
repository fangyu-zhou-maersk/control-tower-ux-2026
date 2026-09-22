import { MdsConfig } from '@maersk-global/mds-config'
import '@maersk-global/fonts/maeu/fonts.css'
import '@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css'
import '@maersk-global/mds-foundations/css/foundations.css'

MdsConfig.iconsDynamicImportPath = import.meta.env.DEV ? '/node_modules/' : '/assets/node_modules/'

import '@maersk-global/mds-components-core'
import '@maersk-global/mds-components-community'
