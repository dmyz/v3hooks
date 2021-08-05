import { Ref } from 'vue';
// Service请求实例
export type Service = (...args: any[]) => Promise<any>;


// 请求参数
export interface BaseOptions {
    manual?: boolean; // 是否需要手动触发
    defaultParams?: any[]; // 如果 manual=false ，自动执行 run 的时候，默认带上的参数
    pollingInterval?: number; // 轮询请求时间
    pollingWhenHidden?: boolean; // 在屏幕不可见时，暂时暂停定时任务。
    ready?: undefined | Ref<boolean>; // 依赖请求
    debounceInterval?: undefined | number; // 防抖
    throttleInterval?: undefined | number; // 节流
    refreshOnWindowFocus?: boolean, // 屏幕聚焦重新请求
    focusTimespan?: undefined | number, // 屏幕聚焦重新间隔
    loadingDelay?: number, //loading延迟时间
    refreshDeps?: any[] //依赖刷新监听
};

// 执行请求
export type Run = (...args: any[])=> void;

// 重新执行
export type Refresh = ()=> void;

//取消请求
export type Cancel = undefined | (()=> void);

// 突变
export type Mutate = (state:any)=> void;


// hook返回值
export interface Result<T> {
    data?: Ref<T | undefined>; // 是否需要手动触发
    loading?: Ref<boolean>;
    run: Run;
    refresh: Refresh;
    cancel: Ref<Cancel>;
    mutate: Mutate;
};