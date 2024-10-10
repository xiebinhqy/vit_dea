import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一武智能辅助文档",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  outDir: "../public",
  themeConfig: {
    base: '/vit_dea/',
    outlineTitle:"目录",
    outline:[2,6],
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "home",
        items: [
          {text: "首页",link: "/"},
          {text: "Examples",link: "/markdown-examples"},
          //zhe段话是用作测试使用
        ],
      },
      {text: "Markdown示例",link: "/markdown-examples"},
      {text: "自动生成侧边栏",link: "/front-end/react/"},
      {text: "自动生成侧边栏2",link: "/backend/rabbitmq/"},
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    //   {
    //     text: 'test2',
    //     items: [
    //       { text: 'Markdown 2', link: '/markdown-examples' },
    //       { text: 'Runtime API 2', link: '/api-examples' },
    //     ],
    //   },
    //   {
    //     text: 'test2',
    //     items: [
    //       { text: 'ront-end', link: '/front-end/react' },
    //       { text: 'backend', link: '/backend/index' },
    //       { text: 'backend', link: '/backend/index' },
    //     ],
    //   },
    // ],
    sidebar: {
      //自动生成侧边栏-基于顶部导航
      "/front-end/react": set_sidebar("/front-end/react"),
      "/backend/rabbitmq": set_sidebar("/backend/rabbitmq"),
      //左侧手动增加侧边栏
      text: '"Examples',
      items:[
        {text: 'Markdown示例',link: '/markdown-examples'},
        { text: 'Runtime API Examples', link: '/api-examples' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    //底部配置
    footer: {
      copyright:"Copyright@ 2023 Albert zhang",
    },
    // 设置搜索框的样式
    search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
  },
})
