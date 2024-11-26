import { ConfigType } from "./ConfigType";
import { UserDataType } from "./UserDataType";

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: UserDataType;
    },
    config: ConfigType
};
