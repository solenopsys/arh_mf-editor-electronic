export * from './app/entry.module';

import {XsModule, XsModuleType} from "@solenopsys/fl-globals";
import {ElectronicModule} from "./lib/electronic.module";

export const ENTRY: XsModule<ElectronicModule> = {
    module: ElectronicModule,
    type: XsModuleType.LAYOUT,
};
