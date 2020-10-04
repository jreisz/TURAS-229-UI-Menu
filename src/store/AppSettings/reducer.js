
const initialState = {
    AppName: "Toro",
    AppVersion: "1.0.0",    
    AutoLoad: false,
    AutoLoadPage: "/Settings?tab=CUSTOMERS",
    LoginMode: {
        current: 'client_adm',
        modes: [
            { mode: "root", user: 'admin', pwd: '555' },
            { mode: "operator", user: 'admin', pwd: '555' },
            { mode: "client_adm", user: 'adm_44', pwd: '555' },
            { mode: "consul_adm", user: 'admin', pwd: '555' },
        ]
    }

};

export default (state = initialState, action) => {    
    return state;
};

export const getAppName = state => state.appSettings.AppName;
export const getAppVersion = state => state.appSettings.AppVersion;
export const getAutoLogin = state => state.appSettings.AutoLogin;
export const getLoginMode = state => state.appSettings.LoginMode;
export const getAutoLoad = state => state.appSettings.AutoLoad;
export const getAutoLoadPage = state => state.appSettings.AutoLoadPage;
