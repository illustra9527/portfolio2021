/* eslint-disable import/prefer-default-export */
export const isMobile = () => {
    const ua = window.navigator.userAgent;

    // 通常是 mobile 的話，在手機的 ua 裡面都會有 Mobi 這個字
    if (/Mobi/i.test(ua)) {
        return true;
    }

    return false;
};
