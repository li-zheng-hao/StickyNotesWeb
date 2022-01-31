import axios from "axios";
import { Message } from "element-ui";

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        let token = sessionStorage.getItem("Authorization");
        // 如果存在token，请求携带token
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        console.log(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (success) => {
        //业务逻辑错误
        console.log("接收到后端返回的response");
        if (success.status && success.status == 200) {
            if (success.data.sussess == false && sussess.data.message != "") {
                Message.error({ message: success.data.message });
                return;
            }
        }
        return success.data;
    },
    (error) => {
        Message.error({ message: "操作失败" + error.response.data.message });
        return null;
    }
);

// 传送json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: "post",
        url: process.env.VUE_APP_SERVER_URL + url,
        data: params,
    });
};

export const getRequest = (url, params) => {
    return axios({
        method: "get",
        url: `${process.env.VUE_APP_SERVER_URL}${url}`,
        data: params,
    });
};
