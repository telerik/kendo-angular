export interface IPlatforms {
    WEB: string;
    MOBILE_NATIVE: string;
}

export class Config {

    // supported platforms
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };

    // current target (defaults to web)
    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    public static get IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static get IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

}
